import react, {useState} from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Textarea } from "../../uikit/Textarea/Textarea";

import {useGetSecDescrQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch} from "react-redux";

import {setDescriptionSecond} from "../../store/profileReducer";

export const SecondDescriptionScreen:react.FC = () => {

    const dispatch = useDispatch();

    const [descr, setDescr] = useState("");
    const [setDescrMutation] = useSetVisitProfileMutation();

    const {data, loading} = useGetSecDescrQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted: (e) => {
            setDescr(e.getVisitByUser?.secondDescr!)
            console.log(e.getVisitByUser?.secondDescr!);
        }
    })

    if (loading) {
        return <div></div>
    }

    console.log(descr);

    return <div className="setDescr__container">
            <Navigation nextName="Проекты" nextLink="/set/projects" currentName="Описание 2"></Navigation>
            <div className="setDescr__content">
                <Textarea onChange={(e:string) =>{
                    setDescrMutation({variables:{
                        id:data?.getVisitByUser?.id,
                        secondDescr:e
                    }});
                    dispatch(setDescriptionSecond(e));
                }} value={data?.getVisitByUser?.secondDescr!}></Textarea>
            </div>
        </div>
}