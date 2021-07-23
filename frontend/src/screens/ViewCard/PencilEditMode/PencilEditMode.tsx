import react, {useState} from "react";
import { Pencil } from "../../../uikit/Pencil/Pencil";

import "./style.css";

interface IPencilEditMode{
    onChange:Function;
    dark:boolean;
}

export const PencilEditMode:react.FC<IPencilEditMode> = (props) => {

    const [active, setActive] = useState(true);
    console.log(!props.dark && active);
    return <div className={"pencil__container" + 
                (
                    active ? " pencil__container-active" : ""
                )} onClick={() => {
        props.onChange();
        setActive(!active);
    }}>
        {
            active ?
            <Pencil noLink link="" height={24} width={24}></Pencil>
            : 
            <Pencil noLink link="" height={24} width={24} dark={!props.dark}></Pencil>

        }
    </div>
}