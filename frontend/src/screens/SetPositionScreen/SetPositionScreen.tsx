import react from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Input } from "../../uikit/Input/Input";

import {useGetPosQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";

export const SetPositionScreen:react.FC = () => {

    const {loading, data} = useGetPosQuery({variables:{token:localStorage.getItem("token")}});
    const [changePosInComapny] = useSetVisitProfileMutation();
    if (loading) {
        return <div></div>
    }


    return <div className="set-position__public-container">
        <div className="set-position__container">
            <Header>Должность</Header>
            <div className="set-position__content">
                <Input placeholder="Должность" onChange={(e:string) => {
                    changePosInComapny({variables:{
                        id:data?.getVisitByUser?.id,
                        positionInCompany: e
                    }})
                }} value={data?.getVisitByUser?.positionInCompany!}></Input>
            </div>
            <Footer link={"/set/description"}>Описание</Footer>
        </div>
    </div>
}