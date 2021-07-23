import react from "react";


interface IDisplay{
    text:string;
}


export const TextAreaDisplay:react.FC<IDisplay> = (props) => {
    return <textarea className="ta">{props.text}</textarea>
}