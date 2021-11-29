import axios from "axios";
import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPoints, setPoints } from "../../store/geoSlice";
import { Button } from "../../uikit/Button/Button";
import { ImageWithBboxes } from "../../uikit/ImageWithBBoxes/ImageWithBBoxes";
import "./style.css";

export const DetailsScreen:react.FC = () => {

    const dispatch = useDispatch();
    const {id} = useParams<{id:string}>();

    const points = useSelector(getPoints);

    if (points.length == 0) {
        axios.get("https://kortex.herokuapp.com/api/camera", {
            headers: {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkpvZSIsImlhdCI6MTYzNzUxMjkxMywiZXhwIjoxNjM3NTk5MzEzLCJqdGkiOiI5MWMzMzc0Zi02NjVmLTQzZTQtYTc1Mi1hYjEwNjc5OGMxYmQiLCJ1c2VyX2lkIjoxLCJvcmlnX2lhdCI6MTYzNzUxMjkxM30.Dear1nLpCz2VbipIgd7lCfrcyFne0nCtUI_hSTKqc0Y"
            }
        }).then((e) => {
            console.log(e)
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
    }
    
    const point = points.filter(e => e.id == parseInt(id))[0]

    return <div className="centered">
        { points.length ?
            <div className="details__content">
        <ImageWithBboxes 
        height = {300}
        src={point.image} 
        bboxes={[
            /* [994, 503, 664, 1147] */
            {'bbox': [375, 739, 643, 853], 'type': 8}
        ]}
        
        ></ImageWithBboxes>
            <div className="info__content">
                <div className="info-header">Объект: {
                    point.name
                }</div>
                <div className="address">Адрес: Северный объезд Одинцова</div>
                <div className="changes">
                    <div className="img-with-data">
        <ImageWithBboxes 
            src={point.image} 
            bboxes={[
                
            ]}
            height={120}
        
        ></ImageWithBboxes>
                        <span>12.02.2020</span>
                    </div>
                    <img src="/static/images/arrow.svg" alt="" />
                    <div className="img-with-data">
                    <ImageWithBboxes 
                        src={point.image} 
                        bboxes={[
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
        : ""}
    </div>
}