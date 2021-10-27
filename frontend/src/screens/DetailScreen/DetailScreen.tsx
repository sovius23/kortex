import react from "react";
import { Button } from "../../uikit/Button/Button";
import { ImageWithBboxes } from "../../uikit/ImageWithBBoxes/ImageWithBBoxes";
import "./style.css";

export const DetailsScreen:react.FC = () => {
    return <div className="centered">
        <div className="details__content">
        <ImageWithBboxes 
        src={"/static/images/ex.png"} 
        height={300}
        bboxes={[
            { bbox: [422, 366, 801, 499], type: 1 },
            { bbox: [369, 514, 829, 652], type: 1},
            {bbox: [10, 4, 356, 114], type: 1}
        ]}
        
        ></ImageWithBboxes>
            <div className="info__content">
                <div className="info-header">Объект: Камера №12141234</div>
                <div className="address">Адрес: ул. Колмогорова 45</div>
                <div className="changes">
                    <div className="img-with-data">
        <ImageWithBboxes 
            src={"/static/images/ex.png"} 
            bboxes={[
                { bbox: [422, 366, 801, 499], type: 1 },
                { bbox: [369, 514, 829, 652], type: 1},
            ]}
            height={120}
        
        ></ImageWithBboxes>
                        <span>12.02.2020</span>
                    </div>
                    <img src="/static/images/arrow.svg" alt="" />
                    <div className="img-with-data">
                    <ImageWithBboxes 
                        src={"/static/images/ex.png"} 
                        bboxes={[
                            { bbox: [422, 366, 801, 499], type: 1 },
                            { bbox: [369, 514, 829, 652], type: 1},
                            {bbox: [10, 4, 356, 114], type: 1}
                        ]}
                        height={120}
                    
                    ></ImageWithBboxes>
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
                <a href="/static/images/Деформационный отчет.docx" download style={{display: "block", width: "100%"}}>
                    <Button onClick={() =>{}} text="Выгрузить отчет"></Button>
                </a>
                
            </div>
        </div>
        
    </div>
}