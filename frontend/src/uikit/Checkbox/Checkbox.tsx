import react, { useState } from "react";
import "./style.css";

import {Checkbox} from "@mui/material"; 

interface ICheckbox{
    text?:string;
}

export const CheckBox:react.FC<ICheckbox> = (props) => {

    const [clicked, setClicked] = useState(false);

    return <div className="checkbox__container" onClick={() => {
        setClicked(!clicked);
    }}>
        <Checkbox defaultChecked/>
        <div className="chb__text">
            {props.text}
        </div>
    </div>
}