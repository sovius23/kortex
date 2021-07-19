import react, { useState } from "react";

import AvatarEditor from 'react-avatar-editor';

import "./style.css";

interface ICropperView{
    zoom:number;
    x:number;
    y:number;
    src:string;
    black?:boolean;
}

export const CropperView:react.FC<ICropperView> = (props) => {


    return <div className="cropper-view__global">
        <div className="front-drop"></div>
        <AvatarEditor
        position={{x:props.x, y:props.y}}
        scale={props.zoom}
        width={200}
        height={200}
        border={2}
        borderRadius={100}
        color={props.black ? [28, 33, 37, 1] : [255,255,255,1]}
        image={props.src}
        ></AvatarEditor>
    </div>
}