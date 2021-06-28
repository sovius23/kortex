import react, { useContext } from "react";
import { Theme, ThemeContext } from "../../App";

import instL from "./light/inst.svg";
import instD from "./dark/inst.svg";

import webL from "./light/web.svg";
import webD from "./dark/web.svg";

import telL from "./light/tel.svg";
import telD from "./dark/tel.svg";

import vkL from "./light/vk.svg";
import vkD from "./dark/vk.svg";

import wsL from "./light/ws.svg";
import wsD from "./dark/ws.svg";

import tgL from "./light/tg.svg";
import tgD from "./dark/tg.svg";

import twitterL from "./light/twitter.svg";
import twitterD from "./dark/twitter.svg";

import facebookL from "./light/fb.svg";
import facebookD from "./dark/fb.svg";
import { Block } from "../Block/Block";

import "./style.css";

export enum IconType{
    inst,
    web,
    tel,
    vk,
    ws,
    tg,
    twitter,
    facebook
}

export const Icon:react.FC<{type:IconType}> = (props) => {

    const Icons = new Map([
        [
            IconType.inst, new Map([
                [Theme.Dark, "/static/images/dark/inst.svg"],
                [Theme.Light, "/static/images/light/inst.svg"],
            ])
        ],
        [
            IconType.web, new Map([
                [Theme.Dark, "/static/images/dark/web.svg"],
                [Theme.Light, "/static/images/light/web.svg"],
            ])
        ],
        [
            IconType.tel, new Map([
                [Theme.Dark, "/static/images/dark/tel.svg"],
                [Theme.Light, "/static/images/light/tel.svg"],
            ])
        ],
        [
            IconType.vk, new Map([
                [Theme.Dark, "/static/images/dark/vk.svg"],
                [Theme.Light, "/static/images/light/vk.svg"],
            ])
        ],
        [
            IconType.ws, new Map([
                [Theme.Dark, "/static/images/dark/ws.svg"],
                [Theme.Light, "/static/images/light/ws.svg"],
            ])
        ],
        [
            IconType.tg, new Map([
                [Theme.Dark, "/static/images/dark/tg.svg"],
                [Theme.Light, "/static/images/light/tg.svg"],
            ])
        ],
        [
            IconType.twitter, new Map([
                [Theme.Dark, "/static/images/dark/twitter.svg"],
                [Theme.Light, "/static/images/light/twitter.svg"],
            ])
        ],
        [
            IconType.facebook, new Map([
                [Theme.Dark, "/static/images/dark/fb.svg"],
                [Theme.Light, "/static/images/light/fb.svg"],
            ])
        ]
    ])

    const {theme} = useContext(ThemeContext);

    return <Block className="icon-block">
        <img src={Icons.get(props.type)?.get(theme)} alt="" />
    </Block>
}

