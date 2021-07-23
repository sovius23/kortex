import react from "react";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Icon, IconType } from "../../uikit/Icon/Icon";
import { Input } from "../../uikit/Input/Input";

import "./style.css"; 

import {useChangeContactsMutation, useGetContactsQuery, GetContactsQuery} from "../../generated/graphql";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch, useStore} from "react-redux";
import {
    setFacebook,
    setInst,
    setTel,
    setWeb,
    setTg,
    setTwitter,
    setVk,
    setWhatsapp
} from "../../store/ContactsReducer"; 
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { RootType } from "../../store/store";

function typeOfInpts(store:RootType, input:IconType) {

    switch (input) {
        case IconType.facebook:
            return store.contactsReducer.facebook == "None" ? "" : store.contactsReducer.facebook
        case IconType.inst:
            return store.contactsReducer.inst == "None" ? "" : store.contactsReducer.inst
        case IconType.tel:
            return store.contactsReducer.tel == "None" ? "" : store.contactsReducer.tel
        case IconType.tg:
            return store.contactsReducer.tg == "None" ? "" : store.contactsReducer.tg
        case IconType.twitter:
            return store.contactsReducer.twitter == "None" ? "" : store.contactsReducer.twitter
        case IconType.vk:
            return store.contactsReducer.vk == "None" ? "" : store.contactsReducer.vk
        case IconType.web:
            return store.contactsReducer.web == "None" ? "" : store.contactsReducer.web
        case IconType.ws:
            return store.contactsReducer.whatsapp == "None" ? "" : store.contactsReducer.whatsapp
    }
}


export const ContactsScreen:react.FC = () => {

    const dispatch = useDispatch();
    const store = useStore();
    const {data, loading} = useGetContactsQuery({variables:{token:localStorage.getItem("token")}})
    const [changeContacts] = useChangeContactsMutation();
    if (loading) {
        return <div></div>
    }
    console.log(data);
    if (data?.getVisitByUser?.contacts?.facebookLink != "facebook.com/" &&
        ((store.getState() as RootType).contactsReducer.facebook == "facebook.com/")) {
            dispatch(setFacebook(data?.getVisitByUser?.contacts?.facebookLink!));
    }

    if (data?.getVisitByUser?.contacts?.twitterLink != "twitter.com/" &&
        ((store.getState() as RootType).contactsReducer.twitter == "twitter.com/")) {
            dispatch(setTwitter(data?.getVisitByUser?.contacts?.twitterLink!));
    }

    if (data?.getVisitByUser?.contacts?.vkLink != "vk.com/" &&
        ((store.getState() as RootType).contactsReducer.vk == "vk.com/")) {
            dispatch(setVk(data?.getVisitByUser?.contacts?.vkLink!));
    }

    if (data?.getVisitByUser?.contacts?.phone?.length &&
        ((store.getState() as RootType).contactsReducer.tel == "None")) {
            dispatch(setTel(data.getVisitByUser.contacts.phone));
    }

    if (data?.getVisitByUser?.contacts?.instLink != "instagram.com/" &&
        (store.getState() as RootType).contactsReducer.inst == "instagram.com/") {
            dispatch(setInst(data?.getVisitByUser?.contacts?.instLink!));
    }

    if (data?.getVisitByUser?.contacts?.tgLink != "t.me/" &&
        (store.getState() as RootType).contactsReducer.tg == "t.me/") {
            dispatch(setTg(data?.getVisitByUser?.contacts?.tgLink!));
    }

    if (data?.getVisitByUser?.contacts?.website?.length &&
        (store.getState() as RootType).contactsReducer.web == "None") {
            dispatch(setWeb(data.getVisitByUser.contacts.website));
    }

    if (data?.getVisitByUser?.contacts?.whatsappLink?.length &&
        (store.getState() as RootType).contactsReducer.whatsapp == "None") {
            dispatch(setWhatsapp(data.getVisitByUser.contacts.whatsappLink));
    }

    console.log(store.getState())

    const contacts_data = [
        {type: IconType.inst, name: "Instagram", reduxF: setInst,
            onChange: (e:string) => {return {instLink:e}}},
        {type: IconType.web, name: "Website", reduxF: setWeb,
            onChange: (e:string) => {return {website:e}}},
        {type: IconType.tel, name: "Phone", reduxF: setTel,
            onChange: (e:string) => {return {phone:e}}},
        {type: IconType.vk, name: "VK", reduxF: setVk,
            onChange: (e:string) => {return {vkLink:e}}},
        {type: IconType.ws, name: "Whatsapp", reduxF: setWhatsapp,
            onChange: (e:string) => {return {whatsappLink:e}}},
        {type: IconType.tg, name: "Telegram", reduxF: setTg,
            onChange: (e:string) => {return {tgLink:e}}},
        {type: IconType.twitter, name: "Twitter", reduxF: setTwitter,
            onChange: (e:string) => {return {twitterLink:e}}},
        {type: IconType.facebook, name: "Facebook", reduxF: setFacebook,
        onChange: (e:string) => {return {facebookLink:e}}}
    ]
    window.document.body.style.setProperty("--back-color", "#fff");

    return <div className="contacts__container">
            <Navigation prevLink="/set/blocks" nextName="Проекты" nextLink="/set/projects" currentName="Контакты"></Navigation>
            
            <div className="contacts-content__button">
                <div className="contacts__content">
                    {
                        contacts_data.map((e) => <div className="contacts-block">
                            <div className="icon__sel">
                                <Icon type={e.type}></Icon>
                            </div>
                            <Input className="contact__input" placeholder={e.name} value={typeOfInpts(store.getState(),e.type)!} 
                            onChange={(el:string) => {
                                changeContacts({variables:{
                                    contacts_id: data?.getVisitByUser?.contacts?.id,
                                    ...e.onChange(el)
                                }})
                                dispatch(e.reduxF(el));
                                console.log(store.getState())
                            }}></Input> 
                        </div>)
                    } 
                </div>
                <ShowCardButton></ShowCardButton>
            </div>
            
        </div>
}