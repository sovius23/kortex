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


export const Switcher:react.FC = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    var checked = theme == Theme.Dark;

    const [changeTheme] = useChangeStateMutation();

    const [flag, setFlag] = useState(false);


    var switcher_class = "light-switcher__container";
    var onImg = "/static/images/switch_on.svg";
    var offImg = "/static/images/switch_of.png";

    if (theme == Theme.Dark) {
        switcher_class = "dark-switcher__container";
    }

    if (flag == false) {
        setFlag(true);
    }

    return <Block className="switcher__global-container">
        <Text className="switcher__text">Темная тема</Text>
        <div className={"switcher__container " + switcher_class} onClick={() => {
            changeTheme({variables:{
                token: localStorage.getItem("token"),
                state: theme == Theme.Dark ? "Light" : "Dark"
            }})
            setTheme(theme == Theme.Dark ? Theme.Light : Theme.Dark);
        }}>
            <img src={
                checked ? onImg : offImg
            } width={"64px"}></img>
        </div>
    </Block>
}