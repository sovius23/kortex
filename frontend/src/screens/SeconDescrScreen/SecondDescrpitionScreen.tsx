import react, {useState} from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Textarea } from "../../uikit/Textarea/Textarea";

import {useGetSecDescrQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch, useStore} from "react-redux";

import {setDescriptionSecond} from "../../store/profileReducer";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { RootType } from "../../store/store";

export const SecondDescriptionScreen:react.FC = () => {

    const dispatch = useDispatch();
    const store = useStore();
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

    if ((store.getState() as RootType).profileReducer.description_second == "None"){
        dispatch(setDescriptionSecond(data?.getVisitByUser?.secondDescr || ""))
    }

    console.log(descr);
    window.document.body.style.setProperty("--back-color", "#fff");

    return <div className="setDescr__container">
            <Navigation nextName="Проекты" nextLink="/set/projects" currentName="Описание 2"></Navigation>
            <div className="setDescr__content">
                <Textarea onChange={(e:string) =>{
                    setDescrMutation({variables:{
                        id:data?.getVisitByUser?.id,
                        secondDescr:e
                    }});
                    dispatch(setDescriptionSecond(e));
                }} value={(store.getState() as RootType).profileReducer.description_second}></Textarea>
                <ShowCardButton></ShowCardButton>
            </div>
        </div>
}