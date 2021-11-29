import react from "react";

import UIDrawer from '@mui/material/Drawer';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import Subject from "@mui/icons-material/Subject";
import Star from "@mui/icons-material/Star";
import Description from "@mui/icons-material/Description";
import History from "@mui/icons-material/History";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListItem from '@mui/material/ListItem';

import "./style.css";
import { ListItemIcon, ListItemText, List } from "@mui/material";
import { useHistory } from "react-router";

interface IDrawer{
    opened: boolean;
}

export const Drawer:react.FC<IDrawer> = (props) => {

    const history = useHistory();

    return <UIDrawer
    sx={
        {
            "& .css-oyvf4u": {
                padding: props.opened ? "0px" : "16px",
                paddingBottom: "16px",
                paddingTop: "16px"
            }
        }
    } 
    style={{marginTop: 64, }} elevation={0} anchor={"left"} variant="persistent" open={true} ModalProps={{
        keepMounted: true,
      }}>
        <div className="drawer__container">
            {
                !props.opened ? <> 
            <IconButton onClick={() => {
                history.push("/index")
            }}>
                <Home></Home>
            </IconButton>
            <IconButton onClick={() => {
                history.push("/index/object-list")
            }}>
                <Subject></Subject>
            </IconButton>
            <IconButton onClick={() => {
                history.push("/index/favorites")
            }}>
                <Star></Star>
            </IconButton> </> : <>
                <List className="drawer__container">
                    <ListItem button key="Main" onClick={() => {
                history.push("/index")
            }}>
                        <ListItemIcon>
                            <Home></Home>
                        </ListItemIcon>
                        <span>Главная</span>
                    </ListItem>
                    <ListItem button key="Subject" onClick={() => {
                history.push("/index/object-list")
            }}>
                        <ListItemIcon>
                        <Subject></Subject>
                        </ListItemIcon>
                        <span>Список объектов</span>
                    </ListItem>
                    <ListItem button key="Favorites" onClick={() => {
                history.push("/index/favorites")
            }}>
                        <ListItemIcon>
                        <Star></Star>
                        </ListItemIcon>
                        <span>Избранные</span>
                    </ListItem>
                </List>
            </>
            }
            
        </div>
        <div className="drawer__container">
            {
                !props.opened ? <>
                    <IconButton>
                        <Description></Description>
                    </IconButton>
                    <IconButton>
                        <History></History>
                    </IconButton>
                    <IconButton>
                        <AccountCircle></AccountCircle>
                    </IconButton>
                </> : <>
                <List className="drawer__container">
                    <ListItem button key="Main">
                        <ListItemIcon>
                            <Description></Description>
                        </ListItemIcon>
                        <span>Выгруженные отчеты</span>
                    </ListItem>
                    <ListItem button key="Main">
                        <ListItemIcon>
                            <History></History>
                        </ListItemIcon>
                        <span>Просмотренные объекты</span>
                    </ListItem>
                    <ListItem button key="Main">
                        <ListItemIcon>
                            <AccountCircle></AccountCircle>
                        </ListItemIcon>
                        <span>Профиль</span>
                    </ListItem>
                </List>
                </>
            }
            
        </div>
        
    </UIDrawer>
}