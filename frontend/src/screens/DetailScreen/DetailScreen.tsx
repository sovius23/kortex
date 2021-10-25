import react from "react";
import { Button } from "../../uikit/Button/Button";
import "./style.css";

export const DetailsScreen:react.FC = () => {
    return <div className="centered">
        <div className="details__content">
            <img src="/static/images/info-cam.png" alt="" className="base-img"/>
            <div className="info__content">
                <div className="info-header">Объект: Камера №12141234</div>
                <div className="address">Адрес: ул. Колмогорова 45</div>
                <div className="changes">
                    <div className="img-with-data">
                        <img src="/static/images/info-cam.png" alt="" />
                        <span>12.02.2020</span>
                    </div>
                    <img src="/static/images/arrow.svg" alt="" />
                    <div className="img-with-data">
                        <img src="/static/images/info-cam.png" alt="" />
                        <span>12.02.2020</span>
                    </div>
                </div>
                <div className="geoposition">
                    <span className="geopos__header">
                        Геопозиция: &nbsp;
                    </span>
                    <span className="geopos__content">
                        123.3223, 30.1234
                    </span>
                </div>
                <div className="info-about-def">
                    <div className="info-about-def__header">
                        Информация о деформации:
                    </div>
                    <div className="info-about-def__row">
                        Классификация по ГОСТ: 
                    </div>
                    <div className="info-about-def__row">
                        Дата образования: 
                    </div>
                    <div className="info-about-def__row">
                        Изменение деформации: 
                    </div>
                    
                </div>
                <a href="/static/images/Деформационный отчет.docx" download>
                    <Button onClick={() =>{}} text="Выгрузить отчет"></Button>
                </a>
                
            </div>
        </div>
    </div>
}