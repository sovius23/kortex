import react from "react";

import {Input} from "../../Input/Input";
import {Text} from "../../Text/Text";
import {Block} from "../../Block/Block";

import {BasePopUp} from "../BasePopUp/BasePopUp";

interface ICreateProjectPopUp{
    deleteFunc:Function;
    onChange:Function;
    onComplete:Function;
}

export const CreateProjectPopUp:react.FC<ICreateProjectPopUp> = (props) => {

    var object = {name: "", url: ""};

    return <BasePopUp deleteFunc={props.deleteFunc}>
        <Input placeholder={"Название"} onChange={(e:string) => {
            object.name = e;
            props.onChange(object);
        }}></Input>
                <Input placeholder={"URL"} onChange={(e:string) => {
                    object.url = e;
                    props.onChange(object);
                }}></Input>
                <div onClick={() => {
                    props.onComplete()
                }}>   
                    <Block className="create-btn"><Text>Добавить</Text></Block>

                </div>
    </BasePopUp>
}