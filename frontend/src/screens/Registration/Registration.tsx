import react, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../App";
import { Block } from "../../uikit/Block/Block";
import { Input } from "../../uikit/Input/Input";
import { Text } from "../../uikit/Text/Text";

import {useRegisterMutation} from "../../generated/graphql";

import "./style.css";
import { Button, ButtonTypes } from "../../uikit/Button/Button";
import { editImg } from "../../store/PhotoReducer";

interface IRegistration{
    signUrl?:string;
}

export const Registration:react.FC<IRegistration> = (props) => {

    const regUrl = props.signUrl || "/login";

    const history = useHistory();

    const [createUser] = useRegisterMutation();

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
    if (props.signUrl == undefined){
    if (localStorage.getItem("token")?.length) {
        history.push("/index");
    }}

    window.document.body.style.setProperty("--back-color", "#fff");


    return <div className="reg__container">
        <div className="reg__header">
            <Text>Регистрация</Text>
        </div>
        {
            errorMsg.length ? <Block className="error-msg">
            <div style={{color: "#D04E54"}}>{errorMsg}</div>
        </Block> : ""
        }
        
        <div className="reg__form">
            <Input className="reg__input" placeholder={"E-mail"} onChange={(e:string) => {
                setEmail(e);
            }}></Input>
            <Input className="reg__input" type="password" placeholder={"Пароль"} onChange={(e:string) => {
                setPassword(e);
            }}></Input>
            <Input type="password" className="reg__input" placeholder={"Пароль еще раз"} onChange={(e:string) => {
                setPasswordAgain(e);
            }}></Input>
            <Link to={regUrl} ><Text className="have__acc-text">Уже есть аккаунт</Text></Link>
            <div className="reg__btn" onClick={() => {
                if (!email.length) {
                    setErrorMsg("Введите Email")
                    return;
                }
                if (!password.length) {
                    setErrorMsg("Введите валидный пароль")
                }
                if (password != passwordAgain) {
                    setErrorMsg("Пароли не совпадают");
                    return;
                }
                try{
                    createUser({variables:{
                        email: email,
                        password: password,
                        password2: passwordAgain
                    }}).then((e) => {
                        var valid = true;
                        console.log(e.data);
                        try{e.data?.register?.errors?.email.map((e:{code:string}) => {
                            if (e.code == "invalid"){
                                setErrorMsg("Введите валидный E-mail")
                                valid = false;
                            }
                        })} catch{}
                        try{e.data?.register?.errors.password2.map((e:{code:string}) => {
                            if (e.code == "password_too_short"){
                                setErrorMsg("Пароль слишком короткий")
                                valid = false;
                            }
                            else if (e.code == "password_too_common") {
                                setErrorMsg("Пароль слишком простой")
                                valid = false;
                            }
                            else if (e.code == "password_entirely_numeric") {
                                valid = false;
                                setErrorMsg("Пароль должен содержать хотябы одну букву")
                            }
                        })} catch{}

                        try{e.data?.register?.errors.username.map((e:{code:string}) => {
                            if (e.code == "unique") {
                                setErrorMsg("Такой E-mail уже зарегистрирован")
                                valid = false;
                            }
                        })}catch{}

                        
                        if (valid) {
                            history.push("/activate-info")
                        }
                    })
                } catch{
                    setErrorMsg("Кто-то уже зарегистрировал этот E-mail")
                }
                
            }}>
                <Button type={ButtonTypes.red} className="block__reg">Зарегистрироваться</Button>
            </div>
        </div>
    </div>

}