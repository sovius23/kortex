import react, {useState} from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Textarea } from "../../uikit/Textarea/Textarea";

import {useGetDescrQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch} from "react-redux";
import {setDescriptionFirst} from "../../store/profileReducer";

export const SetDescriptionScreen:react.FC = () => {

    const dispatch = useDispatch();

    const [descr, setDescr] = useState("");
    const [setDescrMutation] = useSetVisitProfileMutation();

    const {data, loading} = useGetDescrQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted: (e) => {
            setDescr(e.getVisitByUser?.description!)
            console.log(e.getVisitByUser?.description!);
        }
    })

    if (loading) {
        return <div></div>
    }

    console.log(descr);

    return <div className="setDescr__container">
            <Navigation nextLink="/set/contacts" nextName="Контакты" currentName="Описание"></Navigation>
            <div className="setDescr__content">
                <Textarea onChange={(e:string) =>{
                    setDescrMutation({variables:{
                        id:data?.getVisitByUser?.id,
                        description:e
                    }});
                    dispatch(setDescriptionFirst(e));
                }} value={data?.getVisitByUser?.description!}></Textarea>
            </div>
        </div>
}