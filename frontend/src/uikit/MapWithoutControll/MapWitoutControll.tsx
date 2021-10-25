import mapboxgl, { LngLat } from "mapbox-gl";
import react, { useEffect, useRef } from "react";

interface IClearMap{
    position: LngLat;
    width: string;
    height: string;
}

export const MapWithoutControll:react.FC<IClearMap> = (props) => {
    const mapNode = useRef(null);
    
    useEffect(() => {
        const mapboxMap = new mapboxgl.Map({
            container: mapNode.current!,
                  accessToken: "pk.eyJ1IjoiaWxpYXZhcyIsImEiOiJjazcwdXU0dHkwMGViM21ta3VxaHB2YWNqIn0.yHEDUiatwp4dy4MM3ywnOQ",
                  style: "mapbox://styles/iliavas/ckv6rsqn93klj15lheonz10zp",
            center: props.position,
            zoom: 9,
            dragPan: false,
            maxZoom: 9,
            minZoom: 9
          });
    })

    return <div ref={mapNode} style={{"width": props.width, "height": props.height, borderRadius: 5}}></div>
}