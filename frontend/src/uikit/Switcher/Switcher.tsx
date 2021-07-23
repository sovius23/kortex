import react, { useContext, useState } from "react";

import light_swich_off from "./light/switch_of.png";
import light_switch_on from "./light/switch_on.svg";

import dark_switch_off from "./dark/switch_off.svg";
import dark_switch_on from "./dark/switch_on.svg";

import { Block } from "../Block/Block";
import { Text } from "../Text/Text";
import { Theme, ThemeContext } from "../../App";

import "./style.css";
import { useChangeStateMutation } from "../../generated/graphql";


interface ISwitcher{
    state:boolean;
    onChange?:Function;
}

export const Switcher:react.FC<ISwitcher> = (props) => {
    
    const [opened, setOpened] = useState(false);
    
    console.log(props);
    

    return <div className="switcher__global-container">
        <div onClick={() => {
                setOpened(!opened)
            }} className={"switcher__main" + (opened ? " higlight" : "")}>
            <span>
            {
                props.state ? "Темная тема" : "Светлая тема"
            }
            </span>
            <img src="/static/images/arrow.svg" alt="" style={{
                transform: opened ? "rotate(-90deg)" : "rotate(90deg)"
            }} />
        </div>
        {
            opened ? 
        <div className="switcher__add" onClick={() => {
            props.onChange!(props.state);
            setOpened(false);
        }}>
            <span>
                {
                    props.state ? "Светлая тема" : "Темная тема"
                }
            </span>
        </div> : ""
        }
    </div>
}