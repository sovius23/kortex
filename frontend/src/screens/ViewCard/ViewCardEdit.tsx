import react, {useContext, useState} from "react";
import { useHistory, useParams } from "react-router";
import { isConstTypeReference } from "typescript";

import {useGetVisitByIdQuery, useGetVisitIdLazyQuery, useIsUserAdminMutation} from "../../generated/graphql";
import { Block } from "../../uikit/Block/Block";
import { Icon, IconType } from "../../uikit/Icon/Icon";
import { Image } from "../../uikit/Image/Image";
import { Text } from "../../uikit/Text/Text";

import {YMaps, Map, Placemark} from "react-yandex-maps";

import "./style.css";
import { CropperView } from "../../uikit/Cropper/CropperView";
import { Button, ButtonTypes } from "../../uikit/Button/Button";

import {useDispatch, useStore, useSelector} from "react-redux";

import {createPortal} from "react-dom";
import { TelPopUp } from "../../uikit/PopUps/ShowTelPopUp/ShowTelPopUp";
import { RootType } from "../../store/store";
import { setFacebook, setInst, setTg, setTwitter, setVk, setWeb, setWhatsapp } from "../../store/ContactsReducer";
import { setTheme, setCoords, setCroppedImg, setDescriptionFirst, setDescriptionSecond, setImgHead, setMapHead, setMidname, setName, setPosition, setProjectHead, setSurname, setZoom } from "../../store/profileReducer";
import { addProject } from "../../store/ProjectsReducer";
import { addImg } from "../../store/PhotoReducer";
import { changeGeo } from "../../store/GeolocationReducer";
import { Pencil } from "../../uikit/Pencil/Pencil";
import { Line } from "../../uikit/Line/Line";
import { addBlock, editBlockAction, getBlocks } from "../../store/BlockReducer";

export const ViewCardEdit:react.FC = () => {

    const [isUserAdmin] = useIsUserAdminMutation()

    const store = useStore();
    const dispatch = useDispatch();

    const blocks = useSelector(getBlocks);

    const storedData = store.getState() as RootType;
    

    const {id} = useParams<{id:string}>();

    const [getData] = useGetVisitIdLazyQuery();

    const {data, loading} = useGetVisitByIdQuery({variables:{id:id}});

    const [showMoreIcons, setShowMoreIcons] = useState(false);

    const [flag, setFlag] = useState(false);

    const [tel, setTel] = useState("");


    const history = useHistory();


    if (loading) {
        return <div></div>
    }
    var icons = [];
    if (localStorage.getItem("token") == null) {
        history.push(`/${id}`)
    }
    isUserAdmin({variables:{
        token: localStorage.getItem("token"),
        cardId: id
    }}).then((e) => {
        if (e.data?.isUserAdmin?.isAdmin == false) {
            history.push(`/${id}`)
        }
    })

    if (data?.visit?.contacts?.facebookLink){
        if (storedData.contactsReducer.facebook == "None") {
            dispatch(setFacebook(data?.visit?.contacts?.facebookLink!))
        }
        if ((store.getState() as RootType).contactsReducer.facebook.length != 0){
            icons.push({type: IconType.facebook,  
                link:(store.getState() as RootType).contactsReducer.facebook,
                onClick: () => {
                    window.location.href = (store.getState() as RootType).contactsReducer.facebook
                }
            });
        }
    }

    if (data?.visit?.contacts?.twitterLink){
        if (storedData.contactsReducer.twitter == "None") {
            dispatch(setTwitter(data?.visit?.contacts?.twitterLink!))
        }
        if ((store.getState() as RootType).contactsReducer.twitter.length){
            icons.push({type: IconType.twitter,  
                link:(store.getState() as RootType).contactsReducer.twitter,
                onClick: () => {
                    window.location.href = (store.getState() as RootType).contactsReducer.twitter
                }
            });
        }
    }
    
    if (data?.visit?.contacts?.website){
        if (storedData.contactsReducer.web == "None") {
            console.log(data, storedData.contactsReducer.vk)
            dispatch(setWeb(data?.visit?.contacts?.website!))
        }
        if ((store.getState() as RootType).contactsReducer.web.length){
        icons.push({type: IconType.web,  
            link:(store.getState() as RootType).contactsReducer.web,
            onClick: () => {
                window.location.href = (store.getState() as RootType).contactsReducer.web
            }
        });}
    }

    if (data?.visit?.contacts?.whatsappLink){
        if (storedData.contactsReducer.whatsapp == "None") {
            dispatch(setWhatsapp(data?.visit?.contacts?.whatsappLink!))
        }
        if ((store.getState() as RootType).contactsReducer.whatsapp.length){
        icons.push({type: IconType.ws,  
            link:(store.getState() as RootType).contactsReducer.whatsapp,
            onClick: () => {
                window.location.href = (store.getState() as RootType).contactsReducer.whatsapp
            }
        });}
    }

    if (data?.visit?.contacts?.vkLink){
        if (storedData.contactsReducer.vk == "None") {
            dispatch(setVk(data?.visit?.contacts?.vkLink!))
        }
        if ((store.getState() as RootType).contactsReducer.vk.length){
        icons.push({type: IconType.vk,  
            link:(store.getState() as RootType).contactsReducer.vk,
            onClick: () => {
                window.location.href = (store.getState() as RootType).contactsReducer.vk
            }
        });}
    }

    if (data?.visit?.contacts?.tgLink){
        if (storedData.contactsReducer.tg == "None") {
            dispatch(setTg(data?.visit?.contacts?.tgLink!))
        }
        if ((store.getState() as RootType).contactsReducer.tg.length){
        icons.push({type: IconType.tg,  
            link:(store.getState() as RootType).contactsReducer.tg,
            onClick: () => {
                window.location.href = (store.getState() as RootType).contactsReducer.tg
            }
        });}
    }

    if (data?.visit?.contacts?.instLink){
        if (storedData.contactsReducer.inst == "None") {
            dispatch(setInst(data?.visit?.contacts?.instLink!))
        }
        if ((store.getState() as RootType).contactsReducer.inst.length){
        icons.push({type: IconType.inst,  
            link:(store.getState() as RootType).contactsReducer.inst,
            onClick: () => {
                window.location.href = (store.getState() as RootType).contactsReducer.inst
            }
        });}
    }

    if (data?.visit?.contacts?.phone){
        if (storedData.contactsReducer.tel == "None") {
            dispatch(setFacebook(data?.visit?.contacts?.phone!))
        }
        if ((store.getState() as RootType).contactsReducer.tel.length){
        icons.push({type: IconType.tel,  
            link:(store.getState() as RootType).contactsReducer.tel,
            onClick: () => {
                setTel((store.getState() as RootType).contactsReducer.tel)
            }
        });}
    }

    if (storedData.profileReducer.name == "None"){
        dispatch(setName(data?.visit?.name || ""))
    }

    if (storedData.profileReducer.surname == "None"){
        dispatch(setSurname(data?.visit?.surname || ""))
    }

    if (storedData.profileReducer.midname == "None") {
        dispatch(setMidname(data?.visit?.midname || ""))
    }

    if (storedData.profileReducer.position == "None") {
        dispatch(setPosition(data?.visit?.positionInCompany || ""))
    }

    if (storedData.profileReducer.image_cords.x == -1){
        dispatch(setCoords({
            x: data?.visit?.xLogo!,
            y: data?.visit?.yLogo!
        }))
    }

    if (storedData.profileReducer.zoom == -1) {
        dispatch(setZoom(
            data?.visit?.zoomLogo!
        ))
    }

    if (storedData.profileReducer.cropped_img == "None"){
        dispatch(setCroppedImg(
            data?.visit?.fullImgUrl || ""
        ))
    }

    
    if ((store.getState() as RootType).profileReducer.description_first == "None"){
        dispatch(setDescriptionFirst(data?.visit?.description || ""))
    }

    if ((store.getState() as RootType).profileReducer.description_second == "None") {
        dispatch(setDescriptionSecond(data?.visit?.secondDescr || ""))
    }

    if ((store.getState() as RootType).projectReducer.projects.length == 0) {
        data?.visit?.projectSet.edges.map((e) => {
            dispatch(addProject({
                name: e?.node?.name!,
                id: e?.node?.id!,
                link: e?.node?.link!
            }))
        })
    }

    if ((store.getState() as RootType).profileReducer.project_head == "None") {
        dispatch(setProjectHead(data?.visit?.projectDescr || ""));
    }

    if ((store.getState() as RootType).photoReducer.images.length == 0) {
        data?.visit?.photoSet.edges.map((e) => {
            dispatch(addImg({
                url:e?.node?.url!,
                id: e?.node?.id!
            }))
        })
    }

    if ((store.getState() as RootType).profileReducer.img_head == "None") {
        dispatch(setImgHead(data?.visit?.photoDescr || ""));
    }

    if ((store.getState() as RootType).geoReducer.lat == 0) {
        dispatch(changeGeo({
            lat: data?.visit?.geopos?.lattitude || 0,
            long: data?.visit?.geopos?.longitude || 0
        }))
    }

    if ((store.getState() as RootType).profileReducer.map_head == "None") {
        dispatch(setMapHead(data?.visit?.geoDescr || ""))
    }
    var a = (store.getState() as RootType).profileReducer.is_dark
    
    console.log(a, store.getState())
    if (a == "None") {
        dispatch(setTheme(data?.visit?.theme || "Light"))
    }

    const theme = ((store.getState() as RootType).profileReducer.is_dark == "Dark");
    if (theme) {
        window.document.body.style.setProperty("--back-color", "rgba(28, 33, 37, 1)");
    }

    if (!blocks.length) {
        data?.visit?.blockSet.edges.map(e => {
            dispatch(addBlock({
                name: e?.node?.name!,
                id: e?.node?.id!,
                descr: e?.node?.descr!,
                open: false
            }))
            return e;
        })
    }

    console.log(theme)
    return <div className="view-card__global-container">
        
        <div className="view-card__container">
            {
                (store.getState() as RootType).profileReducer.cropped_img.length ?
                <div className="ava__edit-container">
                    <CropperView
                        black={theme}
                        src={(store.getState() as RootType).profileReducer.cropped_img}
                        zoom={(store.getState() as RootType).profileReducer.zoom}
                        x={(store.getState() as RootType).profileReducer.image_cords.x}
                        y={(store.getState() as RootType).profileReducer.image_cords.y}
                    ></CropperView>
                    <Pencil className="edit-link" link={"/set/ava"} dark={!theme} width={24} height={24}></Pencil>
                </div> : ""
            }

            
            
            <div className="view-card__content">
            <div className="name-pos">
                { data?.visit?.positionInCompany?.length ?
                <div className="position">
                    <Text className="position" dark={theme}>
                        {
                            (store.getState() as RootType).profileReducer.position
                        }
                    </Text>
                    <Pencil width={16} height={16} link={"/set/position"} className="edit-link" dark={!theme}></Pencil>
                </div> : ""}
                {
                    data?.visit?.name != null && data.visit.surname != null && data.visit.midname != null ?
                    <div className="fio">
                    <Text dark={theme}>
                    {
                        `${(store.getState() as RootType).profileReducer.name} ${(store.getState() as RootType).profileReducer.surname} ${(store.getState() as RootType).profileReducer.midname}`
                    }
                    </Text>
                    <Pencil width={18} height={18} link={"/set/creds"} dark={!theme}></Pencil>
                </div> : ""
                }
            </div>
            <div className="obert">
                <div className="new__contacts-container">
                    {
                        icons.map((e) => {
                            return <div onClick={() => {
                                e.onClick()
                            }}>
                                <Icon type={e.type} dark={theme}></Icon>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="blocks__container">
                <Pencil dark={!theme} width={18} height={18} link="/set/blocks" className="block__pencil"></Pencil>
            <div className="blocks">
                {
                    blocks.map((e) => {
                        return <Block dark={theme} posClassName="block__container" className={"block__container-class" +
                        (theme ? "" : " block__container")}>
                        <Text className="heading" dark={theme}>
                            {e.name}
                        </Text>
                        <Line dark={theme}></Line>
                        <Text className="block__content" dark={theme}>
                            {e.descr.slice(0, e.open ? e.descr.length : Math.min(e.descr.length, 47)) + (
                                e.descr.length > 50 && !e.open ? "..." : ""
                            )}
                        </Text>
                        <div className="block__image">
                            <img src={
                               theme ? "/static/images/arrowDownDark.svg" : "/static/images/arrowDown.svg"
                            } className={e.open ? "reversed" : ""} style={{transform: (!e.open ? "rotate(180deg);" : "")}} alt=""  onClick={() => {
                                dispatch(editBlockAction({
                                    id: e.id,
                                    name: e.name,
                                    descr: e.descr,
                                    open: !e.open
                                }))
                            }}/>
                        </div>
                        
                    </Block>
                    })
                }
            </div> 
            </div>
            
            
            <div className="descr__container">
                <div className="descr">
                    <Text className="w100" dark={theme}>
                        {
                            (store.getState() as RootType).profileReducer.description_second
                        }
                    </Text>
                    <Pencil link="/set/second-description" width={16} height={16} dark={!theme} ></Pencil>

                </div>
            </div>
            {
                data?.visit?.projectSet.edges.length ?
                <div className="my-project__global-container">
                <div className="edit__heading">
                <Text className="my-project__heading tal" dark={theme}>
                    {(store.getState() as RootType).profileReducer.project_head}
                </Text>
                <Pencil width={18} height={18} link="/set/projects" dark={!theme}></Pencil>
                </div>
                <div className="my-projects__container">
                    {
                        (store.getState() as RootType).projectReducer.projects.map((e) =>
                        
                        theme ? 
                        
                        <a href={e.link} className="project-link">
                            
                            
                            <Block className="proj-container__dark" posClassName="proj-container__pos" dark>
                            <Text dark={theme}>
                                {e.name}

                            </Text>
                        </Block>
                        </a> :
                        <a href={e.link} className="project-link">
                            <Block className="proj-container">
                                <Text dark={theme}>
                                    {e.name}
                                </Text>
                            </Block>
                        </a>
                        
                        )
                    }
                </div>
            </div> : ""
            }
            
            {
                (store.getState() as RootType).photoReducer.images.length ?
                <div className="my-image__container">
                <div className="edit__heading">
                    <Text className="my-image__header tal" dark={theme}>
                        {(store.getState() as RootType).profileReducer.img_head}
                    </Text>
                    <Pencil width={18} height={18} link="/set/photos" dark={!theme}></Pencil>
                </div>
                
                <div className="my-images__content">
                    {
                        (store.getState() as RootType).photoReducer.images.map((e) => 
                            <div className="image-pos__container">
                                <img src={e?.url!} className="image-view__container"></img>
                            </div>)
                    }
                </div>
            </div> : ""
            }
            
            

            
            {
                (store.getState() as RootType).geoReducer.lat ? <div>
                    <div className="map__heading edit__heading">
                        <Text dark={theme}>{
                            (store.getState() as RootType).profileReducer.map_head
                        }</Text>
                        <Pencil width={18} height={18} link={"/set/map"} dark={!theme}></Pencil>
                    </div>
                    <div className="map-container">
                <YMaps>
                    <Map
                        defaultState={{ center: [
                            (store.getState() as RootType).geoReducer.lat,
                            (store.getState() as RootType).geoReducer.long
                        ], zoom: 12 } }
                        width="calc(100% - 0px)"
                    >

                        <Placemark geometry={[
                            (store.getState() as RootType).geoReducer.lat,
                            (store.getState() as RootType).geoReducer.long
                        ]}></Placemark>
                    </Map>
                </YMaps>
            </div>
                </div> : "" 
            }
            
            
        </div>
        <Button onClick={() => {
            history.push("/index")
        }} className="button-home" type={ButtonTypes.red}>
                    <img src="/static/images/home.svg" alt="" />
                    <span style={{color: "white"}}>
                        Вернуться на главную
                    </span>
                </Button>
        </div>
        {
            tel.length ? 
            createPortal(
                <TelPopUp dark={theme} delFunc={() => {setTel("")}} tel={tel}></TelPopUp>,
                window.document.getElementById("message")!
            ) : ""
        }
    </div>
}