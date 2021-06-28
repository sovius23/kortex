import react from "react";
import { Theme, ThemeContext } from "../../App";

import "./style.css";


export const Block:react.FC<{className?:string}> = (props) => {

    const {theme} = react.useContext(ThemeContext);

    var block_container_class = "block__light-container";
    
    if (theme == Theme.Dark) {
        block_container_class = "block__dark-container"
    }

    return <div className={block_container_class + " " + props.className}>
        {props.children}
    </div>
}