import react from "react";
import "./style.css";

export enum ButtonTypes{
    red,
    white
}

interface IButton{
    onClick?:Function;
    type:ButtonTypes;
    className?:string;
}

export const Button:react.FC<IButton> = (props) => {



    return <div onClick={() => {
        props.onClick!()
    }} className={"button " + (
        props.type == ButtonTypes.red ? "red__button " : "white__button ") + props.className
    }>
        {props.children}
    </div>
}