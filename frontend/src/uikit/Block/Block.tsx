import react from "react";
import { Theme, ThemeContext } from "../../App";

import "./style.css";


export const Block:react.FC<{className?:string; dark?:boolean; posClassName?:string}> = (props) => {


    var block_container_class = "block__light-container";

    if (props.dark) {
        block_container_class = "block__dark-container"
    }
    

    return props.dark ? 
    
    <div className={ props.dark ? "grad-border " + props.posClassName : "w100"}>
            <div className={block_container_class + " " + props.className}>
        {props.children}
    </div>
    </div>  : <div className={block_container_class + " " + props.className}>
        {props.children}
    </div>
}