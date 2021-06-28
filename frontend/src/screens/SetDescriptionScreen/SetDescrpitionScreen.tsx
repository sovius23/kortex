import react, {useState} from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Textarea } from "../../uikit/Textarea/Textarea";

import {useGetDescrQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";

export const SetDescriptionScreen:react.FC = () => {

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

    return <div className="setDescription__global-container">
        <div className="setDescr__container">
            <Header>Описание</Header>
            <div className="setDescr__content">
                <Textarea onChange={(e:string) =>{
                    setDescrMutation({variables:{
                        id:data?.getVisitByUser?.id,
                        description:e
                    }});
                }} value={data?.getVisitByUser?.description!}></Textarea>
            </div>
            <Footer link="/set/contacts">Контакты</Footer> 
        </div>
    </div>
}