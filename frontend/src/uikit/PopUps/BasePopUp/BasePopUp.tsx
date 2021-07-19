import react from "react";
import { Input } from "../../Input/Input";
import {Block} from "../../Block/Block";

import "./style.css";
import { Text } from "../../Text/Text";

interface IBasePopUp{
    deleteFunc:Function;
    dark?:boolean;
}

export const BasePopUp:react.FC<IBasePopUp> = (props) => {
    return <>
    {
        props.dark ?
        <div className="create-project__container">
        <Block posClassName="create-project__content" className="paddings" dark={props.dark}>
            <div className="cross" onClick={() => {
                props.deleteFunc()
            }}>
                <Text dark={props.dark}>+</Text></div>
            <div className="create-project__form">
                {props.children}
            </div>
        </Block>
        <div className="backdrop"></div>
    </div> : <div className="create-project__container">
        <Block posClassName="" className="create-project__content" dark={props.dark}>
            <div className="cross" onClick={() => {
                props.deleteFunc()
            }}>
                <Text dark={props.dark}>+</Text></div>
            <div className="create-project__form">
                {props.children}
            </div>
        </Block>
        <div className="backdrop"></div>
    </div>
    }
    
    </> 
}