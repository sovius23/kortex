import react from "react";
import { useHistory, useRouteMatch, Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import { Block } from "../../uikit/Block/Block";
import { Text } from "../../uikit/Text/Text";
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

import "./style.css";

export const SetScreenSelection:react.FC = () => {

    const {url} = useRouteMatch();
    const history = useHistory();

    const blockData = [
        {text: "Аватарка", link: "/ava", widget: <SetLogoScreen></SetLogoScreen>},
        {text: "ФИО", link: "/creds", widget: <SetCredsScreen></SetCredsScreen>},
        {text: "Должность", link: "/position", widget: <SetPositionScreen></SetPositionScreen>},
        {text: "Описание", link: "/description", widget: <SetDescriptionScreen></SetDescriptionScreen>},
        {text: "Контакты", link: "/contacts", widget: <ContactsScreen></ContactsScreen>},
        {text: "Второе описание", link: "/second-description", widget: <SecondDescriptionScreen></SecondDescriptionScreen>},
        {text: "Проекты", link: "/projects", widget: <ProjectScreen></ProjectScreen>},
        {text: "Фотографии", link: "/photos", widget: <PhotoScreen></PhotoScreen>},
        {text: "Карта", link: "/map", widget: <MapScreen></MapScreen>}
    ];

    return <Switch>
        {
            blockData.map((e) => <Route path={`${url}${e.link}`}>
                {e.widget}
            </Route>)
        }
        <Route path={url}>
        <div className="set-screen__public-container">
        <div className="set-screen__container">
        <div className="set-screen__header">
            <div style={{cursor: "pointer"}} onClick={() => {
                history.goBack();
            }}>
                <Arrow></Arrow>
            </div>
            <Text>Что будем редактировать</Text>
        </div>
        <div className="set-screen__content">
            {
                blockData.map((e) => <Link to={`${url}${e.link}`}>
                    <Block className="set-screen__block">
                        <Text className="set-screen-block__text">{e.text}</Text>
                        <Arrow reversed></Arrow>
                    </Block>
                </Link>)
            }
        </div>
    </div>

    </div>
        </Route>
    </Switch>  ;
}