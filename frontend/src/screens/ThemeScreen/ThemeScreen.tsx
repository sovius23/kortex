import react, {useState} from "react";
import { Navigation } from "../../uikit/Navigation/Navigation";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { Switcher } from "../../uikit/Switcher/Switcher";

import {useGetStateQuery, useChangeStateMutation} from "../../generated/graphql";

import {useDispatch, useStore} from "react-redux";
import {setTheme} from "../../store/profileReducer";

import "./style.css";
import { RootType } from "../../store/store";

export const ThemeScreen:react.FC = () => {

    const store = useStore();

    const dispatch = useDispatch();

    const [state, setState] = useState(false);
    const [setServerState] = useChangeStateMutation();

    const {loading, data} = useGetStateQuery(
        {variables:{token:localStorage.getItem("token")},
        onCompleted: (e) => {
        }});
    
    if (loading) {
        return <div></div>
    }
    window.document.body.style.setProperty("--back-color", "#fff");


    
    if ((store.getState() as RootType).profileReducer.is_dark == "None") {
        dispatch(setTheme(data?.getVisitByUser?.theme || "Dark"))
    }


    return <div className="theme__container">
        <div className="prev__nav">
        <Navigation prevLink="/set/map" nextName="Посмотреть визитку" currentName="Геолокация" 
        nextLink={`/${data?.getVisitByUser!.id!}/view`}></Navigation>
        </div>
        <div className="switcher">
            <Switcher state={(store.getState() as RootType).profileReducer.is_dark == "Dark"} onChange={(e:boolean) => {
                setServerState({variables:{
                    token: localStorage.getItem("token"),
                    state: (e ? "Light" : "Dark")
                }});
                dispatch(setTheme(state ? "Dark" : "Light"))
                setState(!state);
            }} ></Switcher>

        </div>
        <ShowCardButton></ShowCardButton>       
        
        </div>
}