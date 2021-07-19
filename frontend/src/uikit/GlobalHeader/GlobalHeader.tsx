import react, { useContext } from "react";
import { useHistory } from "react-router";
import { ThemeContext } from "../../App";

import "./style.css";



export const GlobalHeader:react.FC = () => {

    const {isSignIn, setIsSignIn} = useContext(ThemeContext);

    if (isSignIn && !(localStorage.getItem("token") || "").length){
        setIsSignIn(false)
    }
    if (!isSignIn && (localStorage.getItem("token") || "").length) {
        setIsSignIn(true);
    }

    const history = useHistory();

    return <div className="global-header__container">
        <div className="global-header__logo">
            <img src="/static/images/easy-logo.png" alt="" width={69} />
        </div>
        <div className="global-header__button" onClick={() => {
            if (isSignIn) {
                localStorage.removeItem("token");
                history.push("/login")
            }
            else {
                history.push("/login")
            }
        }}>
            {
                isSignIn ? 
                "Выйти" : "Войти"
            }
        </div>
    </div>
}