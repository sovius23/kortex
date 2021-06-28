import react, { useContext, useEffect, useState } from "react";
import { Theme, ThemeContext } from "../../App";

import "./style.css";

interface IScrollbar{
    koef:number;
}

export const Scrollbar:react.FC<IScrollbar> = (props) => {

    const {theme} = useContext(ThemeContext);
    
    var scrollbar_container = "scrollbar-light__container";
    var scrollbar_active = "scrollbar-light__active";

    const [width, setWidth] = useState(0);
    const [flag, setFlag] = useState(false);

    if (theme == Theme.Dark){
        scrollbar_container = "scrollbar-dark__container";
        scrollbar_active = "scrollbar-dark__active";
    }

    useEffect(() => {
        if (flag == false) {
            setFlag(true);
            setWidth(document.getElementById("scrollbar-id")?.clientWidth!*props.koef)
        }
    })

    return <div className={"scrollbar " + scrollbar_container} id="scrollbar-id">
        <div className={"scrollbar__active " + scrollbar_active} style={{
        width: `${width}px`}}></div>
    </div>
}