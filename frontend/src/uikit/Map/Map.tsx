import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 
import { InformationAboutCamera } from "../InformationAboutCamera/InformationAboutCamera";
import { SortWidget } from "../SortWidget/SortWidget";

import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { getPoints, setActive, setPoints } from "../../store/geoSlice";

function MapboxMap() {
  const dispatch = useDispatch();
  const points = useSelector(getPoints);
  const [map, setMap] = React.useState<mapboxgl.Map>();
  
  const [isClicked, setIsClicked] = React.useState(false);
  const mapNode = React.useRef(null);
  var mapboxMap = React.useRef<mapboxgl.Map>();
  
  console.log(points)
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
      axios.get("https://kortex.herokuapp.com/api/camera").then((e) => {
    console.log(e)
    dispatch(setPoints(
        e.data.map((e:any) => {
          return {
            id: e.id,
            position: [e.position.longitude, e.position.latitude],
            bboxes: [],
            image: e.image
          }
        })
      )
    )
  })
      mapboxMap.current!.addSource('point', {
          'type': 'geojson',
          'data': {
            type: "FeatureCollection",
            features: [ 
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [101.5,56.2],
                  
                },
                properties: []
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [102.5,56.2],
                  
                },
                id: "012",
                properties: []
              }
            ]
          }
        });

      mapboxMap.current!.addLayer({
        id: "point",
        type: "circle",
        source: "point",
        
        paint: {
          "circle-radius": 5,
          "circle-color": "#F36385"
        }
      });
      
      mapboxMap.current!.on("mousemove", "point", () => {
        mapboxMap.current!.getCanvas().style.cursor = "pointer";

      })
      mapboxMap.current!.on("mouseleave", "point", () => {
        mapboxMap.current!.getCanvas().style.cursor = "";
      })
      mapboxMap.current!.on("click", "point", (e) => {
        console.log(e.features![0].id)
        dispatch(setActive({
          id: e.features![0].id as number
        }))
        setIsClicked(true);
      })
    });
    


    setMap(mapboxMap.current);
    
    
    return () => {
      mapboxMap.current!.remove();
    };
  }, []);

  try {
    console.log(points)
    mapboxMap.current!.removeLayer("point");
    mapboxMap.current!.removeSource("point");
    mapboxMap.current!.addSource('point', {
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
    mapboxMap.current!.addLayer({
      id: "point",
      type: "circle",
      source: "point",
      
      paint: {
        "circle-radius": 5,
        "circle-color": "#F36385"
      }
    });
  } catch (e) {
    console.log(e)
  }


  return <div>
    <SortWidget></SortWidget>
    <div ref={mapNode} style={{ width: "100vw", height: "100vh" }} />;
    {
      isClicked ? <InformationAboutCamera onCross={() => {
        setIsClicked(false)
      }}></InformationAboutCamera> : ""

    }
  </div> 
}

export default MapboxMap