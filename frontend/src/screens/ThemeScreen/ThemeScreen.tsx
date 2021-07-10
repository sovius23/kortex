import react, {useState} from "react";
import { Navigation } from "../../uikit/Navigation/Navigation";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { Switcher } from "../../uikit/Switcher/Switcher";

import {useGetStateQuery, useChangeStateMutation} from "../../generated/graphql";

import {useDispatch} from "react-redux";
import {setTheme} from "../../store/profileReducer";

import "./style.css";

export const ThemeScreen:react.FC = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState(false);
    const [setServerState] = useChangeStateMutation();

    const {loading, data} = useGetStateQuery(
        {variables:{token:localStorage.getItem("token")},
        onCompleted: (e) => {
            setState(e.getVisitByUser?.theme != "Light");
            console.log(e.getVisitByUser?.theme != "Light")
        }});
    
    if (loading) {
        return <div></div>
    }

    console.log(data)

    return <div className="theme__container">
        <div className="prev__nav">
        <Navigation nextName="Посмотреть визитку" currentName="Тема" 
        nextLink={`/${data?.getVisitByUser!.id!}/view`}></Navigation>
        </div>
        <div className="switcher">
            <Switcher state={state} onChange={(e:boolean) => {
                setServerState({variables:{
                    token: localStorage.getItem("token"),
                    state: (e ? "Light" : "Dark")
                }});
                dispatch(setTheme(e))
                setState(!state);
            }} ></Switcher>

        </div>
        <ShowCardButton></ShowCardButton>       
        
        </div>
}