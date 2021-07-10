import react from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Input } from "../../uikit/Input/Input";

import {useGetPosQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch, useStore} from "react-redux";

import {setPosition} from "../../store/profileReducer";

export const SetPositionScreen:react.FC = () => {

    const dispatch = useDispatch();
    const store = useStore();

    const {loading, data} = useGetPosQuery({variables:{token:localStorage.getItem("token")}});
    const [changePosInComapny] = useSetVisitProfileMutation();
    if (loading) {
        return <div></div>
    }


    return <div className="set-position__container">
            <Navigation currentName="Должность" nextName="Описание" nextLink="/set/description"></Navigation>
            <div className="set-position__content">
                <Input placeholder="Должность" onChange={(e:string) => {
                    changePosInComapny({variables:{
                        id:data?.getVisitByUser?.id,
                        positionInCompany: e
                    }})
                    dispatch(setPosition(e))
                    console.log(store.getState())
                }} value={data?.getVisitByUser?.positionInCompany!}></Input>
            </div>
        </div>
}