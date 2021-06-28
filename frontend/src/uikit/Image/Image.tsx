import react from "react";
import { Block } from "../Block/Block";

import "./style.css";

interface IImage{
    src:string;
    className?:string;
}

export const Image:react.FC<IImage> = (props) => {
    return <Block className={"image__container-block " + props.className}>
        <img src={props.src}></img>
    </Block>
}