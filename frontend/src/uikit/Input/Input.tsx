import react, { useContext, useState } from "react";
import { setConstantValue } from "typescript";
import { Theme, ThemeContext } from "../../App";

import {CopyToClipboard} from "react-copy-to-clipboard";

import {Text} from "../Text/Text";

import "./style.css";
import { setCoords } from "../../store/profileReducer";

interface IInput{
    placeholder:string;
    onChange:Function;
    className?:string;
    value?:string;
    type?:string;
    icon?:string;
    readonly?:boolean;
    dark?:boolean;
    dark_image?:string;
}

export const Input:react.FC<IInput> = (props) => {

    const [val, setVal] = useState(props.value!);
    var type = props.type || "text";

    const [copy, setCopy] = useState(false);

    if (copy) {
        setTimeout(() => {
            setCopy(false)
        }, 3000)
    }

    const [flag, setFlag] = useState(false);

    if (!flag){
        setFlag(true);
        setVal(props.value!);
    }


    return <>
    {
        props.dark ? 
        <div className={"input-global-global__container " + props.className}>
            <Text dark={props.dark} className="input-text">{props.placeholder}</Text>
            <div className="global-grad__container">
                <div className={"input-global__container " + (props.dark ? "input__c-dark" : "")}>
                    <input type={type} className={"input__container " + (props.dark ? "input__dark" : "")} 
                        onChange={(e) => {
                        props.onChange(e.target.value);
                        setVal(e.target.value);
                    }}
                    value={props.readonly ? props.value : val}
                    />
                    { props.icon ?
                        <CopyToClipboard onCopy={() => {
                            setCopy(true);
                            }} text={props.value!}>
                            <img src={props.dark_image} alt="" width={26}/>
                        </CopyToClipboard>
                    : ""}
    </div>
        
        </div>
        {
            copy ?
            <div className="copied">Скопировано!</div> : ""
        }
    </div>  
        
        
        : 
        <div className={"input-global-global__container " + props.className}>
        <div className="input-text">{props.placeholder}</div>
        <div className={"input-global__container " + (props.dark ? "input__c-dark" : "")}>
        <input type={type} className={"input__container " + (props.dark ? "input__dark" : "")} 
        onChange={(e) => {
            props.onChange(e.target.value);
            setVal(e.target.value);
        }}
        value={props.readonly ? props.value : val}
        />
        { props.icon ?
        <CopyToClipboard onCopy={() => {
            setCopy(true);
        }} text={props.value!}>
            <img src={props.icon} alt="" width={26}/>
        </CopyToClipboard>
         : ""}
    </div>
        {
            copy ?
            <div className="copied">Скопировано!</div> : ""
        }
    </div>  
    }
    </>
        
    }