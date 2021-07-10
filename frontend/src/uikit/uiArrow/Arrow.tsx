import react, { useContext } from "react";
import { Theme, ThemeContext } from "../../App";

import darkImg from "./arrowDark.svg";
import lightImg from "./arrowLight.svg";

import "./style.css";

interface IArrow{
    reversed?:boolean;
}

export const Arrow:react.FC<IArrow> = (props) => {
    const {theme} = useContext(ThemeContext);
    var img = "/static/images/arrowLight.svg";
    if (theme == Theme.Dark){
        img = "/static/images/arrowDark.svg";
    }

    return <img width={19} height={19} src={"/static/images/arrow.svg"} alt="" className={props.reversed ? "img-rev" : ""} />
}