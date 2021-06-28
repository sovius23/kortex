import react from "react";
import { Text } from "../../uikit/Text/Text";
import { Arrow } from "../../uikit/uiArrow/Arrow";
import {Input} from "../../uikit/Input/Input";
import { Header } from "../../uikit/Header/Header";
import { Footer } from "../../uikit/Footer/Footer";

import {useGetCredsQuery} from "../../generated/graphql";

import {useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";

export const SetCredsScreen:react.FC = () => {

    const [setCreds] = useSetVisitProfileMutation();

    const {loading, data} = useGetCredsQuery({variables:{token:localStorage.getItem("token")}});

    if (loading) {
        return <div></div>
    }

    return <div className="set-creds__global-container">
        <div className="set-creds__container">
            <Header>
                ФИО
            </Header>
            <div className="set-creds__content">
                <Input placeholder={"Фамилия"} onChange={(e:string) => {
                    setCreds({variables:{surname:e, id:data?.getVisitByUser?.id}}) 
                }} value={
                    data?.getVisitByUser?.surname
                }></Input>
                
                <Input placeholder={"Имя"} onChange={(e:string) => {
                    setCreds({variables:{name:e, id:data?.getVisitByUser?.id}}) 
                }} value={
                    data?.getVisitByUser?.name!
                }></Input>
                
                <Input placeholder={"Отчество"} onChange={(e:string) => {
                    setCreds({variables:{midname:e, id:data?.getVisitByUser?.id}}) 
                }} value={
                    data?.getVisitByUser?.midname
                }></Input>
            </div>
            <Footer link="/set/position">Должность</Footer>
        </div>
    </div>
}