import react from "react";
import { Block } from "../../Block/Block";
import { DeleteButton } from "../../DeleteButton/DeleteButton";
import { Input } from "../../Input/Input";
import { Text } from "../../Text/Text";
import { BasePopUp } from "../BasePopUp/BasePopUp";

import "./style.css";

interface IDeletePopUp{
    onDeleteButton:Function;
    onDeleteCross:Function;
    onChange:Function;
    onEdit:Function;
    url?:string;
    name?:string;
}

export const DeleteProjectPopUp:react.FC<IDeletePopUp> = (props) => {

    var object = {link:props.url, name:props.name};

    return <BasePopUp deleteFunc={props.onDeleteCross}>
        <Input placeholder="Название" onChange={(e:string) => {
            object.name = e;
            props.onChange(object);
        }} value={props.name}></Input>
        <Input placeholder="URL" onChange={(e:string) => {
            object.link = e;
            props.onChange(object);
        }} value={props.url}></Input>
        <div onClick={() => {
            props.onEdit()
        }}>
            <Block className="create-btn"><Text>Изменить</Text></Block>
        </div> 
        <DeleteButton onClick={() => {
            props.onDeleteButton()
        }}>Удалить</DeleteButton>
    </BasePopUp>
}