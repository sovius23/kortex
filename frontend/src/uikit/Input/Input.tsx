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
}

export const Input:react.FC<IInput> = (props) => {

    const [val, setVal] = useState(props.value!);
    var type = props.type || "text";

    var input_class = "light-input__container";
    const {theme} = useContext(ThemeContext);

    if (theme == Theme.Dark){
        input_class = "dark-input__container"
    }

    return <div className="input-global__container">
        <Text className="input-text">{props.placeholder}</Text>
        <input type={type} className={"input__container " + input_class + " " + props.className} 
        onChange={(e) => {
            props.onChange(e.target.value);
            setVal(e.target.value);
        }}
        value={val}
        />
    </div> 
}