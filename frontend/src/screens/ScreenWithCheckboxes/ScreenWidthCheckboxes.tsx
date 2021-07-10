import react, { useContext, useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { Block } from "../../uikit/Block/Block";
import { Button, ButtonTypes } from "../../uikit/Button/Button";
import { Input } from "../../uikit/Input/Input";
import { Arrow } from "../../uikit/uiArrow/Arrow";

import { ContactsScreen } from "../ContactsScreen/ContactsScreen";
import { MapScreen } from "../MapScreen/MapScreen";
import { PhotoScreen } from "../PhotoScreen/PhotoScreen";
import { ProjectScreen } from "../ProjectsScreen/ProjectsScreen";
import { SecondDescriptionScreen } from "../SeconDescrScreen/SecondDescrpitionScreen";
import { SetCredsScreen } from "../SetCredsScreen/SetCredsScreen";
import { SetDescriptionScreen } from "../SetDescriptionScreen/SetDescrpitionScreen";
import { SetLogoScreen } from "../SetLogoScreen/SetLogoScreen";
import { SetPositionScreen } from "../SetPositionScreen/SetPositionScreen";
import { ThemeScreen } from "../ThemeScreen/ThemeScreen";


import "./style.css";


export const ScreenWithCheckboxes:react.FC = () => {
    const history = useHistory();
    const {url} = useRouteMatch();

    const blockData = [
        {text: "Аватарка", link: "/ava", widget: <SetLogoScreen></SetLogoScreen>},
        {text: "ФИО", link: "/creds", widget: <SetCredsScreen></SetCredsScreen>},
        {text: "Должность", link: "/position", widget: <SetPositionScreen></SetPositionScreen>},
        {text: "Описание", link: "/description", widget: <SetDescriptionScreen></SetDescriptionScreen>},
        {text: "Контакты", link: "/contacts", widget: <ContactsScreen></ContactsScreen>},
        {text: "Второе описание", link: "/second-description", widget: <SecondDescriptionScreen></SecondDescriptionScreen>},
        {text: "Проекты", link: "/projects", widget: <ProjectScreen></ProjectScreen>},
        {text: "Фотографии", link: "/photos", widget: <PhotoScreen></PhotoScreen>},
        {text: "Карта", link: "/map", widget: <MapScreen></MapScreen>},
        {text: "Тема", link: "/theme", widget: <ThemeScreen></ThemeScreen>}
    ];

    if (localStorage.getItem("token") == null) {
        history.push("/login");
    }

    const [isMoreActivity, setIsMoreActivity] = useState(false);

    console.log(url, `/set${blockData[0].link}`);
    return <Switch>

        <Route  path={url} exact>
        <div className="main-screen__container">
        <div className="card">
            <img src="static/images/red-card.svg" alt="" />
        </div>

        <div className="show-creds main-screen__block">
            <Input icon={"static/images/copy.svg"} placeholder={"Визитка доступна по"} onChange={() => {}}></Input>
            <Button type={ButtonTypes.red}>
                <img src="static/images/eye-open.svg" alt="" />

                <span style={{color: "#fff"}}>
                    Посмотреть на визитку
                </span>
            </Button>
        </div>

        <div className="show-red main-screen__block">
            <div className="show-red__title">Редактирование web-визитки</div>
            <div className="show-red__content">
                {
                    (isMoreActivity ? blockData : blockData.slice(0, 3)).map((e) => {
                        return <Link to={"set" +e.link}>
                            <Block className="show-red__block">
                                <span>{e.text}</span>
                                <Arrow></Arrow>
                            </Block>
                        </Link> 
                    })
                }
                {
                    isMoreActivity ? <span className="show-content-more" onClick={() => {
                        setIsMoreActivity(false);
                    }}>Показать меньше...</span> : <span className="show-content-more"
                    onClick={() => {
                        setIsMoreActivity(true);
                    }}
                    >Показать еще 6...</span>
                }
                
            </div>

            <div className="settings">
                <div className="settings__header">
                    Настройки
                </div>
                <div className="settings__content">
                    <div className="settings__block">
                        <Input placeholder={"id визитки"} onChange={() => {}}></Input>
                        <Button type={ButtonTypes.red} onClick={() => {}}>
                            Изменить
                        </Button>
                    </div>
                    <div className="settings__block">
                        <Input type="password" placeholder={"Пароль"} onChange={() => {}}></Input>
                        <Button type={ButtonTypes.red} onClick={() => {}}>
                            Изменить
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>


        </Route>

        {
        blockData.map((e) => {
            return <Route path={`/set${e.link}`}>{e.widget}</Route>
        })
    }
    </Switch> }