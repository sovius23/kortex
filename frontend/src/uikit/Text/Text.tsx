import react, { useContext } from "react";
import { Theme, ThemeContext } from "../../App";

import "./style.css";

interface IText{
    className?:string;
}

export const Text:react.FC<IText> = (props) => {

    const {theme} = useContext(ThemeContext);
    
    var text_class = "text-light";

    if (theme == Theme.Dark) {
        text_class = "text-dark";
    } 

    return <div className={text_class + " " + props.className}>{props.children}</div>
}