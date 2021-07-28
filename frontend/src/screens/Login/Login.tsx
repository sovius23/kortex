import react, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../App";
import { Block } from "../../uikit/Block/Block";
import { Input } from "../../uikit/Input/Input";
import { Text } from "../../uikit/Text/Text";

import {useSignMutation} from "../../generated/graphql";

import "./style.css"
import { Button, ButtonTypes } from "../../uikit/Button/Button";

interface ILogin{
    notRegUrl?:string;
}

export const Login:react.FC<ILogin> = (props) => {

    const [login] = useSignMutation();

    const {setSwitcherVisibility} = useContext(ThemeContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    
    const notRegUrl = props.notRegUrl || "/registration"

    const history = useHistory();

    if (!flag) {
        setFlag(true);
        setSwitcherVisibility(false);
    }

    if (notRegUrl == "/registration"){

    if (localStorage.getItem("token")?.length) {
        history.push("/index");
    }}

    if (errorMsg.length) {
        setTimeout(() => {
            setErrorMsg("")
        }, 3000)
    }

    window.document.body.style.setProperty("--back-color", "#fff");


    return <div className="login__container">
            <div className="login__header">
                <Text>Вход</Text>
            </div>
            {
                errorMsg.length ?
                <Block className="error-msg">
                <div style={{color: "#D04E54"}}>
                    {errorMsg}
                </div>
            </Block> : ""
            }
            
            <div className="login__form">
                <Input type="email" placeholder="E-mail" onChange={(e:string) => {
                    setEmail(e);
                }}></Input>
                <Input type="password" placeholder="Пароль" onChange={(e:string) => {
                    setPassword(e);
                }}></Input>
                <Link to={notRegUrl} className="link__login">
                    <Text className="link__login-text">Еще нет аккаунта</Text>
                </Link>
                <div className="log__btn" onClick={() => {
                    if (!email.length) {
                        setErrorMsg("Введите E-mail")
                        return;
                    }
                    if (!password.length) {
                        setErrorMsg("Введите пароль")
                        return;
                    }
                    if (!email.length) {
                        
                    }
                    login({variables: {
                        email: email,
                        password: password
                    }}).then((e) => {
                        console.log(e)
                        if (e.data?.tokenAuth?.user?.verified == false) {
                            //setErrorMsg("Пользователь не подтвержден, проверьте почту")
                            //return;
                        }
                        
                        try{
                            if (e.data?.tokenAuth?.errors.nonFieldErrors[0].code == "invalid_credentials"){
                            setErrorMsg("Пользователя с такими данными нет")
                            return
                        }} catch{}
                        if (e.data?.tokenAuth?.token?.length) {
                            localStorage.setItem("token", e.data.tokenAuth.token);
                            history.push("/index");
                            window.location.reload()
                        }
                        
                    })
                    setTimeout(() => {
                        //setErrorMsg("Такого пользователя нет")
                    }, 1000)
                }}>
                    <Button type={ButtonTypes.red} className="block__btn-container">Войти</Button>
                </div>
            </div>
        </div>
}