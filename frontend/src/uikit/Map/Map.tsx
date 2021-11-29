import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 
import { InformationAboutCamera } from "../InformationAboutCamera/InformationAboutCamera";
import { SortWidget } from "../SortWidget/SortWidget";

import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { getPoints, Point, setActive, setPoints } from "../../store/geoSlice";
import { clear } from "console";


function initMap(mapboxMap:mapboxgl.Map, onPointClick:Function) {
  mapboxMap.on("mousemove", "point", () => {
    mapboxMap.getCanvas().style.cursor = "pointer";

  })
  mapboxMap.on("mouseleave", "point", () => {
    mapboxMap.getCanvas().style.cursor = "";
  })
  mapboxMap!.on("click", "point", (e) => {
    onPointClick(e)
  })
  mapboxMap.loadImage("/static/images/disable_pin.png", (err, image) => {
    mapboxMap.addImage("disable_point", image!);
  })

  const layers = mapboxMap.getStyle().layers;
  const labelLayerId = layers!.find(
    (layer) => layer.type === 'symbol' && layer!.layout!['text-field']
  )!.id;
 
// The 'building' layer in the Mapbox Streets
// vector tileset contains building height data
// from OpenStreetMap.
mapboxMap.addLayer(
  {
    'id': 'add-3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      },
    labelLayerId
  );
}


function loadPointsToMap(mapboxMap:mapboxgl.Map, points: Point[]) {

  mapboxMap!.addSource('point', {
    'type': 'geojson',
    'data': {
      type: "FeatureCollection",
      features: [ 
        ...points.map((e) => {
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: e.position
            },
            id: e.id.toString(),
            properties: []
          } as any
        }),
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [101.5,56.2],
            
          },
          properties: []
        }
      ]
    }
  });
  mapboxMap.addLayer({
    id: "point",
    type: "circle",
    source: "point",
    paint: {
      "circle-radius": 5,
      "circle-color": "#F36385"
    }
  });
}

function clearMap(mapboxMap:mapboxgl.Map) {
  mapboxMap.removeLayer("point");
  mapboxMap.removeSource("point");
}


function MapboxMap() {
  const dispatch = useDispatch();
  const points = useSelector(getPoints);
  const [map, setMap] = React.useState<mapboxgl.Map>();
  
  const [isClicked, setIsClicked] = React.useState(false);
  const mapNode = React.useRef(null);
  var mapboxMap = React.useRef<mapboxgl.Map>();
  
  React.useEffect(() => {
    
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;
    
    mapboxMap.current = new mapboxgl.Map({
      container: node,
            accessToken: "pk.eyJ1IjoiaWxpYXZhcyIsImEiOiJjazcwdXU0dHkwMGViM21ta3VxaHB2YWNqIn0.yHEDUiatwp4dy4MM3ywnOQ",
            style: "mapbox://styles/iliavas/ckv6rsqn93klj15lheonz10zp",
      center: [37.30, 55.70],
      zoom: 11,
    });
    mapboxMap.current.on("load", () => {
      axios.get("https://kortex.herokuapp.com/api/camera", {
        headers: {
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkpvZSIsImlhdCI6MTYzNzUxMjkxMywiZXhwIjoxNjM3NTk5MzEzLCJqdGkiOiI5MWMzMzc0Zi02NjVmLTQzZTQtYTc1Mi1hYjEwNjc5OGMxYmQiLCJ1c2VyX2lkIjoxLCJvcmlnX2lhdCI6MTYzNzUxMjkxM30.Dear1nLpCz2VbipIgd7lCfrcyFne0nCtUI_hSTKqc0Y"
        }
      }).then((e) => {
        dispatch(setPoints(
          e.data.map((e:any) => {
            return {
              id: e.id,
              position: [e.position.longitude, e.position.latitude],
              bboxes: [],
              image: e.image,
              name: e.name
              }
            })
          )
        )
      })
      initMap(mapboxMap.current!, (e:mapboxgl.EventData) => {
        dispatch(setActive({
          id: e.features![0].id as number
        }))
        setIsClicked(true);
      })
      loadPointsToMap(mapboxMap.current!, [])
    });
    


    setMap(mapboxMap.current);
    
    
    return () => {
      mapboxMap.current!.remove();
    };
  }, []);

  try {
    clearMap(mapboxMap.current!)
    
    loadPointsToMap(mapboxMap.current!, points);
  } catch (e) {
  }


  return <div>
    <SortWidget></SortWidget>
    <div ref={mapNode} style={{ width: "calc(100vw)", height: "100vh", transform: "translateX(30px)"}} />;
    {
      isClicked ? <InformationAboutCamera onCross={() => {
        setIsClicked(false)
      }}></InformationAboutCamera> : ""

    }
  </div> 
}

export default MapboxMap