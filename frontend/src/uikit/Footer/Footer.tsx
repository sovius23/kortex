import react from "react";
import { Text } from "../Text/Text";
import { Arrow } from "../uiArrow/Arrow";

import {Link} from "react-router-dom";

import "./style.css";

interface IFooter{
    link:string;
}

export const Footer:react.FC<IFooter> = (props) => {
    return <div className="footer__container">
        <Text>{props.children}</Text>
        <Link to={props.link}>
            <Arrow reversed></Arrow>
        </Link>
    </div>
}