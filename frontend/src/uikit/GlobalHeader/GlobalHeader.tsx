import react, { useContext } from "react";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { ThemeContext } from "../../App";

import "./style.css";


interface IGlobalHeader{
    rounded?:boolean;
}

export const GlobalHeader:react.FC<IGlobalHeader> = (props) => {

    const {isSignIn, setIsSignIn} = useContext(ThemeContext);

    if (isSignIn && !(localStorage.getItem("token") || "").length){
        setIsSignIn(false)
    }
    if (!isSignIn && (localStorage.getItem("token") || "").length) {
        setIsSignIn(true);
    }

    const history = useHistory();

    const {url} = useRouteMatch();

    return <div className={"global-header__container " +
            (props.rounded ? "rounded" : "")}>
        <div className="global-header__logo" style={{cursor: "pointer"}} onClick={() => {
            if (url =="/"){
            history.push("/index")}
            else {
                history.push("/")
            }
        }}>
            <img src="/static/images/easy-logo.png" alt="" width={69} />
        </div>
        <div className="global-header__button" style={{cursor: 'pointer'}} onClick={() => {
            if (isSignIn) {
                localStorage.removeItem("token");
                history.push("/")
            }
            else {
                history.push("/")
            }
        }}>
            {
                isSignIn ? 
                "Выйти" : "Войти"
            }
        </div>
    </div>
}