import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import react from "react";
import {saveAs} from "file-saver";

import Hammer from "react-hammerjs";

import AvatarEditor from 'react-avatar-editor';

import "./cropper.css";

function urltoFile(url:string, filename:string, mimeType:string){
    mimeType = mimeType || (url.match(/^data:([^;]+);/)||'')[1];
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename, {type:mimeType});})
    );
}

interface ICoords{
    x:number;
    y:number;
}

interface IMYCropper{
    src:string;
    coords?:ICoords;
    onChange?:Function;
}

export const MyCropper:react.FC<IMYCropper> = (props) => {

    var editor:AvatarEditor|null;


    const [zoom, setZoom] = react.useState(1.3);


    let options = {
        recognizers: {
          pinch: { enable: true }
        }
      };
    return <Hammer options={options} onPinchIn={() => {
        setZoom(zoom+0.1)
    }} onPinchOut={() => {
        setZoom(Math.max(zoom-0.1, 0.8))
    }}>
        <div onWheel={(e) => {
            setZoom(Math.max(e.deltaY * -0.002 + zoom, 0.8))
        }}>
        <AvatarEditor
            image={props.src}
            width={200}
            height={200}
            border={50}
            color={[36, 36, 36, 0.49]} // RGBA
            scale={zoom}
            borderRadius={500}
            onPositionChange={(e) => {
                props.onChange!(e);
            }}
        />
        </div>

        

    </Hammer> 
}