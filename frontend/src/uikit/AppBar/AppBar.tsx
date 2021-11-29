import react from "react";
import Appbar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import "./style.css";

interface IAppBar{
    onMenuClicked: () => void;
}

export const AppBar:react.FC<IAppBar> = (props) => {
    return <Appbar elevation={0} style={{background: "#299FF4", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}}>
        <Toolbar>
            <IconButton onClick={props.onMenuClicked}>
                <MenuIcon></MenuIcon>
            </IconButton>
        </Toolbar>
        {props.children}
    </Appbar>
}