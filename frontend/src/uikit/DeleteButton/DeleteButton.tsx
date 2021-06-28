import react, { useContext } from "react";
import { Theme, ThemeContext } from "../../App";

import "./style.css";

interface IDeleteButton{
    onClick?:Function;
    className?:string;
}

export const DeleteButton:react.FC<IDeleteButton> = (props) => {

    const {theme} = useContext(ThemeContext);

    var buttonClass = " ";

    if (theme == Theme.Dark) {
        buttonClass = " delete-button__dark ";
    }

    return <div className={"delete-button__container" + buttonClass + props.className}
    onClick={() => {
        props.onClick!()
    }}
    >
        {props.children}
    </div>
}