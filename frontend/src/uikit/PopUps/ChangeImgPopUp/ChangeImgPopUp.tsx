import react from "react";
import { Block } from "../../Block/Block";
import { DeleteButton } from "../../DeleteButton/DeleteButton";
import { ImageUpload } from "../../ImageUpload/ImageUpload";
import { Text } from "../../Text/Text";
import { BasePopUp } from "../BasePopUp/BasePopUp";

import "./style.css";

interface IChangeImgPopUp{
    crossClick:Function;
    changeClick:Function;
    deleteClick:Function;
}

export const ChangeImgPopUp:react.FC<IChangeImgPopUp> = (props) => {
    return <BasePopUp deleteFunc={props.crossClick}>
        <div style={{marginTop: "20px"}}></div>
        
        <ImageUpload className="image-upload__pop" onChange={(e:File) => {
            props.changeClick(e);
        }}><Text>Загрузить новую</Text></ImageUpload>
        
        <DeleteButton onClick={() => {
            props.deleteClick()
        }}>Удалить</DeleteButton>
    </BasePopUp>
}