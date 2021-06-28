import react, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../App";
import { Block } from "../../uikit/Block/Block";
import { Input } from "../../uikit/Input/Input";
import { Text } from "../../uikit/Text/Text";

import {useCreateUserMutation} from "../../generated/graphql";

import "./style.css";

export const Registration:react.FC = () => {

    const history = useHistory();

    const [createUser] = useCreateUserMutation();

    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [email, setEmail] = useState("");

    const {setSwitcherVisibility} = useContext(ThemeContext);
    const [errorMsg, setErrorMsg] = useState("");
    const [flag, setFlag] = useState(false);
    if (!flag) {
        setFlag(true);
        setSwitcherVisibility(false);
    }
    if (localStorage.getItem("token")?.length) {
        history.push("/index");
    }

    return <div className="centered">
        <div className="reg__container">
        <div className="reg__header">
            <Text>Регистрация</Text>
        </div>
        {
            errorMsg.length ? <Block className="error-msg">
            <Text>{errorMsg}</Text>
        </Block> : ""
        }
        
        <div className="reg__form">
            <Input placeholder={"E-mail"} onChange={(e:string) => {
                setEmail(e);
            }}></Input>
            <Input type="password" placeholder={"Пароль"} onChange={(e:string) => {
                setPassword(e);
            }}></Input>
            <Input type="password" placeholder={"Пароль еще раз"} onChange={(e:string) => {
                setPasswordAgain(e);
            }}></Input>
            <Link to="/login" ><Text className="have__acc-text">Уже есть аккаунт</Text></Link>
            <div className="reg__btn" onClick={() => {
                if (password != passwordAgain) {
                    setErrorMsg("Пароли не совпадают");
                    return;
                }
                try{
                    createUser({variables:{
                        username: email,
                        password: password
                    }}).then((e) => {
                        if (!e.data?.createUser?.ok) {
                            setErrorMsg("Кто-то уже зарегистрировал этот E-mail")
                        }
                        else {
                            history.push("login")
                        }
                    })
                } catch{
                    setErrorMsg("Кто-то уже зарегистрировал этот E-mail")
                }
                
            }}>
                <Block className="block__reg">Зарегистрироваться</Block>
            </div>
        </div>
    </div>

    </div> 
}