import react from "react";
import { useHistory } from "react-router-dom";
import { Button, ButtonTypes } from "../Button/Button";

import {useGetIdQuery} from "../../generated/graphql";

export const ShowCardButton:react.FC = () => {

    const {data, loading} = useGetIdQuery({variables:{token:localStorage.getItem("token")}})

    const history = useHistory();
    
    return <Button type={ButtonTypes.red} onClick={() => {
        history.push(`/${data?.getVisitByUser!.id!}/view`)
    }}>
        <img src="/static/images/eye-open.svg" alt="" />
        <span style={{color: "white"}}>Посмотреть на визитку</span>
    </Button>
}