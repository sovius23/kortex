import react from "react";

import "./style.css";

interface IButton{
    text:string;
    onClick?:() => void;
}

export const Button:react.FC<IButton> = (props) => {
    return <button className="button" onClick={props.onClick}>{props.text}</button>
}