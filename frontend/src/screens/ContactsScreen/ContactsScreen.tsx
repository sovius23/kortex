import react from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Icon, IconType } from "../../uikit/Icon/Icon";
import { Input } from "../../uikit/Input/Input";

import "./style.css"; 

import {useChangeContactsMutation, useGetContactsQuery, GetContactsQuery} from "../../generated/graphql";

function typeOfInpts(data:GetContactsQuery, input:IconType) {

    switch (input) {
        case IconType.facebook:
            return data.getVisitByUser?.contacts?.facebookLink
        case IconType.inst:
            return data.getVisitByUser?.contacts?.instLink
        case IconType.tel:
            return data.getVisitByUser?.contacts?.phone
        case IconType.tg:
            return data.getVisitByUser?.contacts?.tgLink
        case IconType.twitter:
            return data.getVisitByUser?.contacts?.twitterLink
        case IconType.vk:
            return data.getVisitByUser?.contacts?.vkLink
        case IconType.web:
            return data.getVisitByUser?.contacts?.website
        case IconType.ws:
            return data.getVisitByUser?.contacts?.whatsappLink
    }
}


export const ContactsScreen:react.FC = () => {

    const {data, loading} = useGetContactsQuery({variables:{token:localStorage.getItem("token")}})
    const [changeContacts] = useChangeContactsMutation();


    const contacts_data = [
        {type: IconType.inst, name: "Instagram", 
            onChange: (e:string) => {return {instLink:e}}},
        {type: IconType.web, name: "Website",
            onChange: (e:string) => {return {website:e}}},
        {type: IconType.tel, name: "Phone",
            onChange: (e:string) => {return {phone:e}}},
        {type: IconType.vk, name: "VK",
            onChange: (e:string) => {return {vkLink:e}}},
        {type: IconType.ws, name: "Whatsapp",
            onChange: (e:string) => {return {whatsappLink:e}}},
        {type: IconType.tg, name: "Telegram",
            onChange: (e:string) => {return {tgLink:e}}},
        {type: IconType.twitter, name: "Twitter",
            onChange: (e:string) => {return {twitterLink:e}}},
        {type: IconType.facebook, name: "Facebook",
        onChange: (e:string) => {return {facebookLink:e}}}
    ]

    if (loading) {
        return <div></div>
    }

    return <div className="contacts__global-container">
        <div className="contacts__container">
            <Header>Контакты</Header>
            <div className="contacts__content">
                {
                    contacts_data.map((e) => <div className="contacts-block">
                        <div className="icon__sel">
                            <Icon type={e.type}></Icon>
                        </div>
                        <Input className="contact__input" placeholder={e.name} value={typeOfInpts(data!,e.type)!} 
                        onChange={(el:string) => {
                            changeContacts({variables:{
                                contacts_id: data?.getVisitByUser?.contacts?.id,
                                ...e.onChange(el)
                            }})
                        }}></Input> 
                    </div>)
                }
                
            </div>
            <Footer link={"/set/second-description"}>Второе описание</Footer>
        </div>
    </div>
}