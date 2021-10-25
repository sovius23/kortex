import react from "react"

import "./style.css";

interface IINput{
    placeholder:string;
    icon:string;
}

export const Input:react.FC<IINput> = (props) => {
    return <div className="input__container">
        {
            props.icon == "" ? "" : 
            <div className="icon-place">
                <img src={props.icon} alt="" />
            </div>
        }
        
        <input type="text" className={"input " + (props.icon == "" ? "input__icon" : "")} placeholder={props.placeholder}/>
    </div>
}