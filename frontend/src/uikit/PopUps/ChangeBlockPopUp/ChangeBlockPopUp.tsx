import react from "react";
import { Button, ButtonTypes } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Text } from "../../Text/Text";
import { Textarea } from "../../Textarea/Textarea";
import { BasePopUp } from "../BasePopUp/BasePopUp";

interface IChangeBlockPopUp{
    onDeleteFunc:Function;
    onCrossFunc:Function;
    onEditFunc:(name:string, descr:string) => void;
    descr:string;
    name:string;
}

export const ChangeBlockPopUp:react.FC<IChangeBlockPopUp> = (props) => {
    var name = props.name;
    var descr = props.descr;

    return <BasePopUp deleteFunc={props.onCrossFunc}>
        <div style={{alignSelf: "center"}}>Изменение блока</div>
        <Input placeholder="Название" value={props.name} onChange={(e:string) => {
            name = e;
        }}></Input>
        <Textarea onChange={(e:string) => {
            descr = e;
        }} value={props.descr}></Textarea>
        <Button type={ButtonTypes.red} onClick={() => {
            props.onEditFunc(name, descr);
        }}>Изменить</Button>
        <Button type={ButtonTypes.white} onClick={() => {
            props.onDeleteFunc();
        }}>Удалить</Button>
    </BasePopUp>
}