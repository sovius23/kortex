import react from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import cross from "../../images/cross.svg";
import { getActive, setActive } from "../../store/geoSlice";
import { Button } from "../Button/Button";
import { ImageWithBboxes } from "../ImageWithBBoxes/ImageWithBBoxes";
import "./style.css";

interface IInfo{
    onCross:() => void;
}

export const InformationAboutCamera:react.FC<IInfo> = (props) => {
    const history = useHistory();

    const active = useSelector(getActive);
    console.log(active)
    return <div className="info-about-cam__container">
        <div className="cross__paddings">
            <div className="cross__area" onClick={props.onCross}>
                <img src={"/static/images/cross.svg"} alt="" />
            </div>
            <div className="main-info-part">
            <span>Северный объезд Одинцова</span>

                <ImageWithBboxes src={active!.image} bboxes={active!.bboxes!} height={187}/>
                <span>
                    {
                        active?.bboxes.length ?
                        "Поврежденная дорога": "Дорога не повреждена"
                    }
                </span>
                <Button text="Добавить в избранное"></Button>
                <Button text="Подробная информация" onClick={() => {
                    history.push(`/index/${active!.id}/details`);
                }}></Button>
            </div>
        </div>
    </div>
}