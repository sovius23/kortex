import react from "react";
import MapboxMap from "../../uikit/Map/Map";
import { Sidebar } from "../../uikit/Sidebar/Sidebar";

import "./style.css";

export const ScreenWithMap:react.FC = () => {
    return <div className="screen-with-map__container">
        <Sidebar></Sidebar>
        <MapboxMap></MapboxMap>
    </div>
}