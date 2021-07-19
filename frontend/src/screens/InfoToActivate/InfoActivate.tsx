import react from "react";
import { Link } from "react-router-dom";
import { Button, ButtonTypes } from "../../uikit/Button/Button";

import "./style.css";

export const InfoActivate:react.FC = () => {
    return <div className="info-activate__container">
        <img src="/static/images/infoActivateImg.svg" alt="" />
        <span style={{fontSize: 18, textAlign: "center"}}>Посмотрите свой Email, Активируйте аккаунт</span>
        
        <Link to={"/registration"}>
            <Button type={ButtonTypes.red}>
                Изменить Email
            </Button>
        </Link>
        
    </div>
}