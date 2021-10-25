import react, { useState } from "react";
import "./style.css";


interface ICheckbox{
    text?:string;
}

export const CheckBox:react.FC<ICheckbox> = (props) => {

    const [clicked, setClicked] = useState(false);

    return <div className="checkbox__container" onClick={() => {
        setClicked(!clicked);
    }}>
        <div className={"checkbox__box " + (clicked ? "chb__active" : "")}>
            {
                clicked ? <img src="/static/images/check.svg" alt="" /> : ""
            }
        </div>
        <div className="chb__text">
            {props.text}
        </div>
    </div>
}