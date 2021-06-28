import react, {useState} from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Textarea } from "../../uikit/Textarea/Textarea";

import {useGetSecDescrQuery, useSetVisitProfileMutation} from "../../generated/graphql";

import "./style.css";

export const SecondDescriptionScreen:react.FC = () => {

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

    return <div className="setDescription__global-container">
        <div className="setDescr__container">
            <Header>Описание 2</Header>
            <div className="setDescr__content">
                <Textarea onChange={(e:string) =>{
                    setDescrMutation({variables:{
                        id:data?.getVisitByUser?.id,
                        secondDescr:e
                    }});
                }} value={data?.getVisitByUser?.secondDescr!}></Textarea>
            </div>
            <Footer link="/set/projects">Проекты</Footer> 
        </div>
    </div>
}