import react from "react"

import "./style.css";

interface IINput{
    placeholder:string;
    icon:string;
}

export const Input:react.FC<IINput> = (props) => {
    return <div className="input__container">
        <div className="icon-place">
            <img src={props.icon} alt="" />
        </div>
        <input type="text" className="input" placeholder={props.placeholder}/>
    </div>
}