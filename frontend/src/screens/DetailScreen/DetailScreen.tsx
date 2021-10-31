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
    }
    
    const point = points.filter(e => e.id == parseInt(id))[0]

    return <div className="centered">
        { points.length ?
            <div className="details__content">
        <ImageWithBboxes 
        src={"/static/images/"+ point.image} 
        height={300}
        bboxes={[
        ]}
        
        ></ImageWithBboxes>
            <div className="info__content">
                <div className="info-header">Объект: Камера №12141234</div>
                <div className="address">Адрес: ул. Колмогорова 45</div>
                <div className="changes">
                    <div className="img-with-data">
        <ImageWithBboxes 
            src={"/static/images/"+ point.image} 
            bboxes={[
                
            ]}
            height={120}
        
        ></ImageWithBboxes>
                        <span>12.02.2020</span>
                    </div>
                    <img src="/static/images/arrow.svg" alt="" />
                    <div className="img-with-data">
                    <ImageWithBboxes 
                        src={"/static/images/"+ point.image} 
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