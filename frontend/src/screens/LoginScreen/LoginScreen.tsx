import react from "react";
import { useHistory } from "react-router";
import { Button } from "../../uikit/Button/Button";
import { Input } from "../../uikit/Input/Input";

import "./style.css";

export const LoginScreen:react.FC = () => {

    const history = useHistory();

    return <div className="centered">
        <div className="login__container">
            <div className="title">Вход</div>
            <img src="/static/images/login-image.svg" alt="" width={345}/>
            <div className="login__inputs">
                <Input placeholder={"Логин"} icon={"/static/images/profile_icon.svg"}></Input>
                <Input placeholder={"Пароль"} icon={"/static/images/profile_icon.svg"} ></Input>
                <Button text="Войти" onClick={() => {
                    history.push("/index")
                }}></Button>
            </div>
           
        </div>
    </div>
    
}