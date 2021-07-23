import react from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Arrow } from "../uiArrow/Arrow";

import "./style.css";

interface INavigation{
    nextLink:string;
    currentName:string;
    prevLink:string;
    nextName:string;
}

export const Navigation:react.FC<INavigation> = (props) => {

    const history = useHistory();

    return <div className="navigation__global-container">
        <div className="navigation-container__block" style={{cursor: "pointer"}} onClick={() => {
            history.push(props.prevLink);
        }}>
            <Arrow reversed></Arrow>
            <span>{props.currentName}</span>
        </div>
        <Link to={props.nextLink}>
            <div className="navigation-container__block">
                <span>{props.nextName}</span>
                <Arrow></Arrow>
            </div>
        </Link>
        
    </div>
}