import react, { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router";
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
import { SetBlockScreen } from "../BlockScreen/BlockScreen";
import { SetLogoScreen } from "../SetLogoScreen/SetLogoScreen";
import { SetPositionScreen } from "../SetPositionScreen/SetPositionScreen";
import { ThemeScreen } from "../ThemeScreen/ThemeScreen";

import {useSelector, useDispatch, useStore} from "react-redux";

import {changeNewId, getId} from "../../store/newIdReducer";

import {useGetVerbIdLazyQuery, useGetVerbIdQuery, useChangeVerbIdMutation, useChangePasswordMutation} from "../../generated/graphql";

import "./style.css";


export const ScreenWithCheckboxes:react.FC = () => {

    const card_verb_id = useSelector(getId);
    const [changePassword] = useChangePasswordMutation();
    const store = useStore();
    const dispatch = useDispatch();
    const history = useHistory();
    const {url} = useRouteMatch();
    const [changeId] = useChangeVerbIdMutation();
    const {data, loading} = useGetVerbIdQuery({variables:{
        token: localStorage.getItem("token")
    }, onCompleted:(data) => {
        if (card_verb_id.length == 0) {
            dispatch(changeNewId(data?.getVisitByUser?.verbId || data?.getVisitByUser?.id!))
        }
    }});
    window.document.body.style.setProperty("--back-color", "#fff");
    const [flag, setFlag] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    var password = "";

    const blockData = [
        {text: "Аватарка", link: "/ava", widget: <SetLogoScreen></SetLogoScreen>},
        {text: "ФИО", link: "/creds", widget: <SetCredsScreen></SetCredsScreen>},
        {text: "Должность", link: "/position", widget: <SetPositionScreen></SetPositionScreen>},
        {text: "Блоки", link: "/blocks", widget: <SetBlockScreen></SetBlockScreen>},
        {text: "Контакты", link: "/contacts", widget: <ContactsScreen></ContactsScreen>},
        {text: "Проекты", link: "/projects", widget: <ProjectScreen></ProjectScreen>},
        {text: "Фотографии", link: "/photos", widget: <PhotoScreen></PhotoScreen>},
        {text: "Карта", link: "/map", widget: <MapScreen></MapScreen>},
        {text: "Тема", link: "/theme", widget: <ThemeScreen></ThemeScreen>}
    ];

    //if (localStorage.getItem("token") == null) {
    //    history.push("/login");
    //}

    const [isMoreActivity, setIsMoreActivity] = useState(false);

    console.log("asdf")
    if (history.location.pathname =="/index" && localStorage.getItem("token") == null ) {
        history.push("/login");
    }

    
    console.log(data); 


    var new_id = "None";

    if (!flag) {
        setFlag(true);

    }

    

    if (loading) {
        return <div></div>
    }

    

    return <Switch>

        <Route  path={url} exact>
        <div className="main-screen__container">
        <div className="card">
            
            <img src="static/images/red-card_.svg" alt="" style={{cursor:"pointer"}} onClick={() => {
                history.push(`/${data?.getVisitByUser?.id!}`)
            }}/>
        </div>

        <div className="show-creds main-screen__block">
            <Input readonly value={
                window.location.protocol + "//" + window.location.host + "/" + card_verb_id
            } icon={"static/images/copy.svg"} placeholder={"Визитка доступна по"} onChange={() => {}}></Input>
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
                    >Показать еще 5...</span>
                }
                
            </div>

            <div className="settings">
                <div className="settings__header">
                    Настройки
                </div>
                <div className="settings__content">
                    <div className="settings__block">
                        <Input placeholder={"id визитки"} onChange={(e:string) => {
                            new_id = e
                        }} value={data?.getVisitByUser?.verbId || data?.getVisitByUser?.id}></Input>
                        {
                            errorMsg.length ? 
                            <div style={{color: "#D04E54", alignSelf: "center"}}>{errorMsg}</div>
                            : ""
                        
                        }
                        <Button type={ButtonTypes.red} onClick={() => {
                            changeId({variables:{
                                token: localStorage.getItem("token"),
                                id: new_id
                            }}).then((e) => {
                                console.log(new_id)
                                if (e.data?.updateVerbId?.ok == true) {
                                    dispatch(changeNewId(new_id))
                                }
                                else {
                                    setErrorMsg("Такой id уже есть")
                                }
                            })
                        }}>
                            Изменить
                        </Button>
                        <Input type="password" placeholder={"Новый пароль"} onChange={(e:string) => {
                            password = e
                            console.log(e)
                        }}></Input>
                        <Button type={ButtonTypes.red} onClick={() => {
                            changePassword({
                                variables: {
                                    token: localStorage.getItem("token")!,
                                    newPassword: password
                                }
                            }).then((e) => {
                                console.log(e)
                            })
                        }}>Изменить</Button>
                    </div>
                   
                </div>
            </div>
        </div>

    </div>


        </Route>

        {
        blockData.map((e) => {
            return <Route path={`/set${e.link}`}>
                
                {localStorage.getItem("token") == null ? <Redirect to="/login"></Redirect> : e.widget}
                </Route>
        })
    }
    </Switch> }