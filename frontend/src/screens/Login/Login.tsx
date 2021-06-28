import react, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../App";
import { Block } from "../../uikit/Block/Block";
import { Input } from "../../uikit/Input/Input";
import { Text } from "../../uikit/Text/Text";

import {useGetTokenMutation} from "../../generated/graphql";

import "./style.css"


export const Login:react.FC = () => {

    const [login] = useGetTokenMutation();

    const {setSwitcherVisibility} = useContext(ThemeContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [errorMsg, serErrorMsg] = useState("");
    
    const history = useHistory();

    if (!flag) {
        setFlag(true);
        setSwitcherVisibility(false);
    }

    if (localStorage.getItem("token")?.length) {
        history.push("/index");
    }

    return <div className="centered">
        <div className="login__container">
            <div className="login__header">
                <Text>Вход</Text>
            </div>
            {
                errorMsg.length ?
                <Block className="error-msg">
                <Text>
                    
                </Text>
            </Block> : ""
            }
            
            <div className="login__form">
                <Input placeholder="E-mail" onChange={(e:string) => {
                    setEmail(e);
                }}></Input>
                <Input type="password" placeholder="Пароль" onChange={(e:string) => {
                    setPassword(e);
                }}></Input>
                <Link to="/registration" className="link__login">
                    <Text className="link__login-text">Еще нет аккаунта</Text>
                </Link>
                <div className="log__btn" onClick={() => {
                    login({variables: {
                        username: email,
                        password: password
                    }}).then((e) => {
                        if (e.data?.tokenAuth?.token.length) {
                            localStorage.setItem("token", e.data.tokenAuth.token);
                            history.push("/index")
                        }
                        else {
                            serErrorMsg("Ошибка")
                        }
                    })
                }}>
                    <Block className="block__btn-container">Войти</Block>
                </div>
            </div>
        </div>
    </div>
}