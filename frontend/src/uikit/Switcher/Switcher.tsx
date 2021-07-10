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
    state:Boolean;
    onChange?:Function;
}

export const Switcher:react.FC<ISwitcher> = (props) => {

    const {theme, setTheme} = useContext(ThemeContext);

    var checked = theme == Theme.Dark;


    console.log(props);
    

    return <div className="switcher__global-container">
        <div className="switcher__text">Темная тема</div>
        <div className="switcher__container" onClick={() => {
            props.onChange!(props.state);
            }}>
            <div className={"switcher__dark " + 
                (!props.state ? "to-end" : "")}></div>
        </div>
    </div>
}