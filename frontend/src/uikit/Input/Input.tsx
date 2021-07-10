import react, { useContext, useState } from "react";
import { setConstantValue } from "typescript";
import { Theme, ThemeContext } from "../../App";

import {Text} from "../Text/Text";

import "./style.css";

interface IInput{
    placeholder:string;
    onChange:Function;
    className?:string;
    value?:string;
    type?:string;
    icon?:string;
}

export const Input:react.FC<IInput> = (props) => {

    const [val, setVal] = useState(props.value!);
    var type = props.type || "text";

    const [flag, setFlag] = useState(false);

    if (!flag){
        setFlag(true);
        setVal(props.value!);
    }


    return <div className={"input-global-global__container " + props.className}>
        <div className="input-text">{props.placeholder}</div>
        <div className="input-global__container">
        <input type={type} className={"input__container " } 
        onChange={(e) => {
            props.onChange(e.target.value);
            setVal(e.target.value);
        }}
        value={val}
        />
        <img src={props.icon} alt="" width={26}/>
    </div>

    </div>  
}