import react from "react";
import { Input } from "../../Input/Input";
import {Block} from "../../Block/Block";

import "./style.css";
import { Text } from "../../Text/Text";

interface IBasePopUp{
    deleteFunc:Function;
}

export const BasePopUp:react.FC<IBasePopUp> = (props) => {
    return <div className="create-project__container">
        <Block className="create-project__content">
            <div className="cross" onClick={() => {
                props.deleteFunc()
            }}>
                <div>+</div></div>
            <div className="create-project__form">
                {props.children}
            </div>
        </Block>
        <div className="backdrop"></div>
    </div>
}