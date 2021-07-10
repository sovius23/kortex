import react, { useState } from "react";

import AvatarEditor from 'react-avatar-editor';

import "./style.css";

export const CropperView:react.FC = () => {

    const [pos, posChange] = useState({x:0, y:0});

    return <div className="cropper-view__global">
        <div className="front-drop"></div>
        <AvatarEditor
        position={pos}
        onPositionChange={(e) => {posChange(e)}}
        width={200}
        height={200}
        border={2}
        borderRadius={100}
        color={[255,255,255,1]}
        image="https://media.kasperskydaily.com/wp-content/uploads/sites/90/2019/07/22155727/kaspersky-rebranding-in-details-featured.jpg"
        ></AvatarEditor>
    </div>
}