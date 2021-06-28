import react from "react";
import { useHistory } from "react-router";
import { Text } from "../Text/Text";
import { Arrow } from "../uiArrow/Arrow";

import "./style.css";


export const Header:react.FC = (props) => {

    const history = useHistory();

    return <div className="header">
        
        <div style={{cursor:"pointer"}} onClick={() => {
            history.goBack();
        }}>
            <Arrow></Arrow>
        </div>
        <Text>{props.children}</Text>

    </div>
}