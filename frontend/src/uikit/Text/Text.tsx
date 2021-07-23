import react, { useContext } from "react";
import { Theme, ThemeContext } from "../../App";

import "./style.css";

interface IText{
    className?:string;
    dark?:boolean;
}

export const Text:react.FC<IText> = (props) => {

    
    var text_class = "text-light";

    if (props.dark) {
        text_class = "text-dark";
    } 

    return <span className={text_class + " " + props.className} style={{whiteSpace: "pre-wrap"}}>{props.children}</span>
}