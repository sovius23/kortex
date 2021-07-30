import react, { useContext, useEffect, useState } from "react";
import { Theme, ThemeContext } from "../../App";

import {Text} from "../Text/Text";

import "./style.css";

interface ITextarea{
    onChange:Function;
    value?:string;
}

export const Textarea:react.FC<ITextarea> = (props) => {

    var ta_theme = "light-ta";

    const [value, setValue] = useState(props.value);

    const [count, setCount] = useState(props.value?.length || 0);

    const {theme} = useContext(ThemeContext);

    const [flag, setFlag] = useState(0);

    useEffect(() => {
        if (flag == 0) {
            setFlag(1);
            setValue(props.value)
        }
    })


    if (theme == Theme.Dark) {
        ta_theme = "dark-ta";
    }

    return <div className="ta-container">
        <div className="ta__head">{`Описание (${count}/1000)`}</div>
        <textarea className={"ta " + ta_theme} onChange={(e) => {
            props.onChange(e.target.value);
            console.log(e.target.value)
            setCount(e.target.value.length);
            setValue(e.target.value);
        }} maxLength={1000}>{value}</textarea>
        </div>
}