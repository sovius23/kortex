import react from "react";
import { Input } from "../../Input/Input";
import { Text } from "../../Text/Text";
import { BasePopUp } from "../BasePopUp/BasePopUp";

import "./style.css";

interface ITelPopUp{
    dark?:boolean;
    delFunc:Function;
    tel:string;
}

export const TelPopUp:react.FC<ITelPopUp> = (props) => {
    return <BasePopUp dark={props.dark} deleteFunc={props.delFunc}>
        <Text dark={props.dark} className="pop-up__text">Сохранить телефон</Text>
        <Input dark={props.dark} dark_image="/static/images/copy-dark.svg" icon={"/static/images/copy.svg"} readonly onChange={() => {}} placeholder={"Телефон"} value={props.tel}></Input>
    </BasePopUp>
}