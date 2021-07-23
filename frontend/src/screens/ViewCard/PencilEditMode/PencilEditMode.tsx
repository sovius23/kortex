import react, {useState} from "react";
import { Pencil } from "../../../uikit/Pencil/Pencil";

import "./style.css";

interface IPencilEditMode{
    onChange:Function;
}

export const PencilEditMode:react.FC<IPencilEditMode> = (props) => {

    const [active, setActive] = useState(true);
    console.log(active);
    return <div className={"pencil__container" + 
                (
                    active ? " pencil__container-active" : ""
                )} onClick={() => {
        props.onChange();
        setActive(!active);
    }}>
        <Pencil noLink link="" height={24} width={24}></Pencil>
    </div>
}