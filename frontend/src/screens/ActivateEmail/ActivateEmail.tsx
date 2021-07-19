import react from "react";
import { Link, useParams } from "react-router-dom";
import { Button, ButtonTypes } from "../../uikit/Button/Button";

import {useVerifyMutation} from "../../generated/graphql";

import "./style.css";

export const ActivateEmail:react.FC = () => {

    const {id} = useParams<{id:string}>();

    const [activate] = useVerifyMutation();

    activate({variables:{
        token: id
    }})

    return <div className="activate-email__container">
        <img src="/static/images/authEmailImg.svg" alt="" />
        <span style={{fontSize: 18}}>Вы активировали свой акканут</span>
        <Link to={"/login"}>
            <Button type={ButtonTypes.red}>Войти в личный кабинет</Button>
        </Link>
    </div>
}