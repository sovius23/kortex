import react, { useState } from "react";
import { useHistory } from "react-router";
import "./style.css";


interface IMenuItem{
    text:string;
    img:string;
    closed:boolean;
    onClick:() => void;
}

const MenuItem:react.FC<IMenuItem> = (props) => {
    return <div className="menu-item" onClick={props.onClick}>
        {
            props.closed ? "" : <div style={{width: 200}}>{props.text}</div>

        }
        <img src={props.img}></img>
    </div>
}

export const Sidebar:react.FC = () => {

    const [closed, setClosed] = useState(true);

    const history = useHistory();

    const menuItemsTop = [
        {
            img: "/static/images/home.svg",
            text: "Главная",
            onClick: () => {
                history.push("/index")
            }
        },
        {
            img: "/static/images/list.svg",
            text: "Список объектов",
            onClick: () => {
                history.push("/index/object-list")
            }
        },
        {
            img: "/static/images/star.svg",
            text: "Избранные",
            onClick: () => {
                history.push("/index/favorites")
            }
        },
        {
            img: "/static/images/kopter.svg",
            text: "Загрузить видео",
            onClick: () => {
                history.push("/index/video-upload")
            }
        }
    ];
    const menuItemsButtom = [
        {
            img: "/static/images/document.svg",
            text: "Архив загруженных отчетов",
            onClick: () => {
                history.push("/index/archieve")
            }
        },
        {
            img: "/static/images/history.svg",
            text: "Просмотренные объекты",
            onClick: () => {
                history.push("/index/viewed")
            }
        },
        {
            img: "/static/images/profile_icon_sidebar.svg",
            text: "Профиль",
            onClick: () => {
                history.push("/index/profile")
            }
        },
        {
            img: "/static/images/menu.svg",
            text: "Скрыть меню",
            onClick: () => {
                setClosed(!closed);
            }
        }
    ]

    return <div className="sidebar">
        <div className="menu">
            <div className="top-block">
            {
                menuItemsTop.map(e => <MenuItem {...e} closed={closed}></MenuItem>)
            }
            </div>
            
            <div className="top-block buttom-block">
                {
                    menuItemsButtom.map(e => <MenuItem {...e} closed={closed}></MenuItem>)
                }
            </div>
        </div>
    </div>
}