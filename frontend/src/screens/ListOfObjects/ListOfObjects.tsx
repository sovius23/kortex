import { LngLat } from "mapbox-gl";
import react from "react";
import { useHistory } from "react-router";
import { Button } from "../../uikit/Button/Button";
import { Input } from "../../uikit/Input/Input";
import { MapWithoutControll } from "../../uikit/MapWithoutControll/MapWitoutControll";

import "./style.css";

export const ListOfObjects: react.FC = () => {
    return <div className="list__container">
        <Input icon="/static/images/search.svg" placeholder="Начните вводить номер"></Input>
        <ListObject></ListObject>
        <ListObject></ListObject>
    </div>
}

const ListObject: react.FC = () => {
    const history = useHistory();
    return <div className="list__container-object">
        <MapWithoutControll position={new LngLat(101.5,56.2)} width={"250px"} height={"250px"}></MapWithoutControll>
        <div className="map__info">
            <div className="map__info-name">
                Камера №123
            </div>
            <div className="info">
                <div className="info-row">
                    <span>Проблем с дорогами: &nbsp;</span>
                    <span className="red">56</span>
                </div>
                
                <div className="info-row">
                    <span>Кол-во поврежденных знаков: &nbsp;</span>
                    <span>0</span>
                </div>
                
                <div className="info-row">
                    <span>Кол-во Людей на улицах: &nbsp;</span>
                    <span>Умеренное</span>
                </div>
            </div>
            <div className="blue-btn" onClick={() => {
                history.push("/index/1/details")
            }}>
                Подробнее
            </div>
        </div>
    </div>
}