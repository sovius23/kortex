import react from "react";
import { Link, useHistory } from "react-router-dom";


interface IPencil{
    width?:number;
    height?:number;
    link:string;
    dark?:boolean;
    className?:string;
    noLink?:boolean;
}

export const Pencil:react.FC<IPencil> = (props) => {
    const history = useHistory();
    
    return <div className={props.className} style={{cursor: "pointer"}} onClick={() => {
        if (props.noLink) {
            return
        }
        history.push(props.link)
    }}>
        <img src={
            props.dark ? "/static/images/pencil_light.svg" :
            "/static/images/pencil_dark.svg"
        } alt=""  width={props.width || 14} height={props.height || 14}/>
    </div> 
}