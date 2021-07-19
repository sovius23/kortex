import react from "react";
import { Link } from "react-router-dom";


interface IPencil{
    width?:number;
    height?:number;
    link:string;
    dark?:boolean;
    className?:string;
}

export const Pencil:react.FC<IPencil> = (props) => {
    return <Link className={props.className} to={props.link}>
        <img src={
            props.dark ? "/static/images/pencil_light.svg" :
            "/static/images/pencil_dark.svg"
        } alt=""  width={props.width || 14} height={props.height || 14}/>
    </Link> 
}