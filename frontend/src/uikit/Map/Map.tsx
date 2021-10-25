import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; 
import { InformationAboutCamera } from "../InformationAboutCamera/InformationAboutCamera";
// импортируем стили mapbox-gl чтобы карта отображалась коррекно

function MapboxMap() {
    // здесь будет хранится инстанс карты после инициализации
  const [map, setMap] = React.useState<mapboxgl.Map>();

  const [isClicked, setIsClicked] = React.useState(false);

  // React ref для хранения ссылки на DOM ноду который будет 
  // использоваться как обязательный параметр `container` 
  // при инициализации карты `mapbox-gl`
  // по-умолчанию будет содержать `null`
    const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
        // если объект window не найден,
        // то есть компонент рендерится на сервере
        // или dom node не инициализирована, то ничего не делаем
    if (typeof window === "undefined" || node === null) return;

    // иначе создаем инстанс карты передавая ему ссылку на DOM ноду
    // а также accessToken для mapbox
    const mapboxMap = new mapboxgl.Map({
      container: node,
            accessToken: "pk.eyJ1IjoiaWxpYXZhcyIsImEiOiJjazcwdXU0dHkwMGViM21ta3VxaHB2YWNqIn0.yHEDUiatwp4dy4MM3ywnOQ",
            style: "mapbox://styles/iliavas/ckub224qn0mn918qj4x96qllx",
      center: [102.023, 55.906],
      zoom: 9,
    });
    mapboxMap.on("load", () => {
      mapboxMap.addSource('point', {
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
      })
      mapboxMap.on("mousemove", "point", () => {
        mapboxMap.getCanvas().style.cursor = "pointer";

      })
      mapboxMap.on("mouseleave", "point", () => {
        mapboxMap.getCanvas().style.cursor = "";
      })
      mapboxMap.on("click", "point", (e) => {
        setIsClicked(true);
      })
    })

    // и сохраняем созданный объект карты в React.useState
    setMap(mapboxMap);
    
    
    // чтобы избежать утечки памяти удаляем инстанс карты
		// когда компонент будет демонтирован
    return () => {
      mapboxMap.remove();
    };
  }, []);

    return <div>
      <div ref={mapNode} style={{ width: "100vw", height: "100vh" }} />;
      {
        isClicked ? <InformationAboutCamera onCross={() => {
          setIsClicked(false)
        }}></InformationAboutCamera> : ""

      }
    </div> 
}

export default MapboxMap