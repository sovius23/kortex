import react, { useState } from "react";

import "./style.css";

export const VideoUploadScreen:react.FC = () => {

    const [path, setPath] = useState("");

    return <div className="centered">
        <video src={path} controls={path.length != 0} width={600}></video>
        <label htmlFor="file-input">
            <div className="file-input__input">Выберите файл</div>
        </label>
        <input type="file" accept=".mp4" id="file-input" style={{display: "none"}} onChange={(e) => {
            console.log((e.target.files![0] as any).webkitRelativePath)
            setPath(URL.createObjectURL((e.target.files![0])))
        }}/>
    </div>
}