import react from "react";

import "./style.css"

interface ILine{
    dark:boolean;
}

export const Line:react.FC<ILine> = (props) => {
    return <div className={"line " + (!props.dark ? "light" : "")}></div>
}