import react from "react";

import "./style.css";

export const AvaContainer:react.FC<{src:string}> = (props) => {
    return <div className="ava-container">
        <img src={props.src} alt="" />
    </div>
}