import react, { useContext } from "react";
import { Theme, ThemeContext } from "../../App";
import {Text} from "../Text/Text";


import checkImg from "./checkImg.svg";
import DarkCheckImg from "./checkImgDark.svg";

import "./style.css";

const CheckBoxContainer:react.FC<{enabled:boolean}> = (props) => {

    const {theme} = useContext(ThemeContext);

    var chb_theme = props.enabled ? "light-chb__enabled" : "light-chb__disabled";

    if (theme == Theme.Dark) {
        chb_theme = props.enabled ? "dark-chb__enabled" : "dark-chb__disabled";
    }

    return <div className={"check-bc__container " + chb_theme }>
        {props.enabled ?
        <img src={
            theme == Theme.Light ? "/static/images/checkImg.svg" : 
            "/static/images/checkImgDark.svg"
        } alt="" /> : ""}
    </div>
}

export const CheckBox:react.FC<{enabled:boolean, text:string}> = (props) => {
    return <div className="check__container">
        <CheckBoxContainer enabled={props.enabled}></CheckBoxContainer>
        <Text className="check__text">{props.text}</Text>
    </div>
}