import react from "react";
import { Input } from "../../uikit/Input/Input";

import "./style.css";

export const ProfileScreen:react.FC = () => {
    return <div className="profile-screen__container">
        <Input placeholder="ФИО" icon=""></Input>
        <Input placeholder="Должность" icon=""></Input>
        <Input placeholder="Организация" icon=""></Input>
        <Input placeholder="ФИО" icon="/static/images/+7.svg"></Input>
        <Input placeholder="E-mail" icon=""></Input>
    </div>
}