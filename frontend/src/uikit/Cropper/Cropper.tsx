import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'
import react from "react";
import {saveAs} from "file-saver";

import Hammer from "react-hammerjs";

import AvatarEditor from 'react-avatar-editor';

import "./cropper.css";


interface ICoords{
    x:number;
    y:number;
}

interface IMYCropper{
    src:string;
    coords?:ICoords;
    zoom:number;
    onChange?:Function;
}

export const MyCropper:react.FC<IMYCropper> = (props) => {


    const [zoom, setZoom] = react.useState(props.zoom);
    const [cords, setCords] = react.useState(props.coords);


    let options = {
        recognizers: {
          pinch: { enable: true }
        }
      };
    return <Hammer options={options} onPinchIn={() => {
        setZoom(Math.max(zoom-0.03, 0.8))
        props.onChange!(cords, Math.max(zoom-0.03, 0.8))
    }} onPinchOut={() => {
        props.onChange!(cords, Math.max(zoom+0.03, 0.8))
        setZoom(Math.max(zoom+0.03, 0.8))
    }}>
        <div onWheel={(e) => {
            props.onChange!(cords, Math.max(e.deltaY * -0.002 + zoom, 0.8))
            setZoom(Math.max(e.deltaY * -0.002 + zoom, 0.8))
        }}>
        <AvatarEditor
            position={cords}
            image={props.src}
            width={200}
            height={200}
            border={50}
            color={[36, 36, 36, 0.49]}
            scale={zoom}
            borderRadius={500}
            onPositionChange={(e) => {
                setCords(e);
                props.onChange!(e, zoom);
            }}
        />
        </div>
    </Hammer> 
}