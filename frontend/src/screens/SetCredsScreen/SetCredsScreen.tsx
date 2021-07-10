import react from "react";
import { Text } from "../../uikit/Text/Text";
import { Arrow } from "../../uikit/uiArrow/Arrow";
import {Input} from "../../uikit/Input/Input";
import { Header } from "../../uikit/Header/Header";
import { Footer } from "../../uikit/Footer/Footer";

import {useGetCredsQuery} from "../../generated/graphql";

import {useSetVisitProfileMutation} from "../../generated/graphql";

import {useDispatch, useSelector, useStore} from "react-redux";

import {setName, setSurname, setMidname, getName} from "../../store/profileReducer";


import "./style.css";
import { Navigation } from "../../uikit/Navigation/Navigation";

export const SetCredsScreen:react.FC = () => { 
    const store = useStore();

    const [setCreds] = useSetVisitProfileMutation();
    const dispatch = useDispatch();

    const {loading, data} = useGetCredsQuery({variables:{token:localStorage.getItem("token")}});

    if (loading) {
        return <div></div>
    }

    return <div className="set-creds__global-container">
        <div className="set-creds__container">
            <Navigation currentName="ФИО" nextName="Должность" nextLink="/set/position/"></Navigation>
            <div className="set-creds__content">
                <Input placeholder={"Фамилия"} onChange={(e:string) => {
                    dispatch(setSurname(e));
                    setCreds({variables:{surname:e, id:data?.getVisitByUser?.id}}) 
                }} value={
                    data?.getVisitByUser?.surname
                }></Input>
                
                <Input placeholder={"Имя"} onChange={(e:string) => {
                    dispatch(setName(e));
                    setCreds({variables:{name:e, id:data?.getVisitByUser?.id}})
                    console.log(store.getState()) 
                }} value={
                    data?.getVisitByUser?.name!
                }></Input>
                
                <Input placeholder={"Отчество"} onChange={(e:string) => {
                    dispatch(setMidname(e));
                    console.log(store.getState())
                    setCreds({variables:{midname:e, id:data?.getVisitByUser?.id}}) 
                }} value={
                    data?.getVisitByUser?.midname
                }></Input>
            </div>
        </div>
    </div>
}