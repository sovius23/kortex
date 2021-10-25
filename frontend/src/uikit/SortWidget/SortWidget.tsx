import react, { useState } from "react";
import { CheckBox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";

import "./style.css";

export const SortWidget:react.FC = () => {
    const [isClosed, setIsClosed] = useState(false);

    return <div className="sort-widget__public-container">
        <div className="circle" onClick={() => {
            setIsClosed(!isClosed);
        }}>
            <img 
                src="/static/images/arrow.svg" 
                alt="" 
                width={24}
                style={{cursor: "pointer"}}
                className = {isClosed ? "disabled" : ""} 
            />
        </div>
        <div className={"sort-widget__container " + (isClosed ? "hid" : "")}>
            <Input placeholder="Место..." icon="/static/images/search.svg"></Input>
            <div className="analyse__info">Анализ дороги</div>
            <div className="checkboxes">
                <div className="checkbox-row">
                    <CheckBox text="Дефекты на дорогах"></CheckBox>
                    <CheckBox text="Найденные объекты"></CheckBox>
                </div>
            </div>
        </div>
    </div> 
}