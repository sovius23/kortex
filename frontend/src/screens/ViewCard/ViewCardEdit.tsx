import react, {useContext, useEffect, useRef, useState} from "react";
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

import ReactDOM, {createPortal} from "react-dom";
import { TelPopUp } from "../../uikit/PopUps/ShowTelPopUp/ShowTelPopUp";
import { RootType } from "../../store/store";
import { getContacts, setFacebook, setInst, setTg, setTwitter, setVk, setWeb, setWhatsapp } from "../../store/ContactsReducer";
import { setTheme, setCoords, setCroppedImg, setDescriptionFirst, setDescriptionSecond, setImgHead, setMapHead, setMidname, setName, setPosition, setProjectHead, setSurname, setZoom, setBlockDescr, getProfile } from "../../store/profileReducer";
import { addProject, getProjects } from "../../store/ProjectsReducer";
import { addImg, getImages } from "../../store/PhotoReducer";
import { changeGeo } from "../../store/GeolocationReducer";
import { Pencil } from "../../uikit/Pencil/Pencil";
import { Line } from "../../uikit/Line/Line";
import { addBlock, editBlockAction, getBlocks } from "../../store/BlockReducer";
import { PencilEditMode } from "./PencilEditMode/PencilEditMode";
import {getGeo} from "../../store/GeolocationReducer";


import {isIos} from "./platformDetect";
import FileSaver from "file-saver";


export function urlize(url:string) {
    if (url.startsWith("https://") || url.startsWith("http://")) {
        return url;
    }
    else {
        return "https://" + url;
    }
}


export const ViewCardEdit:react.FC = () => {
    const imgRef = useRef(null);
    const [width, setWidth] = useState(false);
    useEffect(() => {
        console.log(window.document.getElementsByClassName("images__container"))
        //var w = window.document.getElementsByClassName("images__container")![0].clientWidth;
        var elements = window.document.getElementsByClassName("images__row")
        for (let i = 1; i < elements.length; ++i) {
            
            (elements[i] as any).style.height = `${window.document.getElementsByClassName("images__container")![0].clientWidth}px`;
        }
        
        
        
    })

    const contacts = useSelector(getContacts);
    const profile = useSelector(getProfile);
    const projects = useSelector(getProjects);
    const images = useSelector(getImages);
    const geo = useSelector(getGeo)


    const [isUserAdmin] = useIsUserAdminMutation()

    const dispatch = useDispatch();

    const blocks = useSelector(getBlocks);

    

    const {id} = useParams<{id:string}>();

    const [getData] = useGetVisitIdLazyQuery();

    const {data, loading} = useGetVisitByIdQuery({variables:{id:id}});

    const [showMoreIcons, setShowMoreIcons] = useState(false);

    const [flag, setFlag] = useState(false);

    const [tel, setTel] = useState("");
    const [withPencil, setWithPencil] = useState(true);

    const history = useHistory();


    const editMode = useState(true);

    if (loading) {
        return <div></div>
    }
    console.log(data)

    console.log(data);
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
    try{
        if (data?.visit?.contacts?.facebookLink != "facebook.com/"){
            if (contacts.facebook == "facebook.com/") {
                dispatch(setFacebook(data?.visit?.contacts?.facebookLink!))
            }
            if (contacts.facebook.length != 0){
                icons.push({type: IconType.facebook,  
                    link: contacts.facebook,
                    onClick: () => {
                        window.open(urlize(contacts.facebook))
                    }
                });
            }
        }
    } catch{}
        
    try{
        if (data?.visit?.contacts?.twitterLink != "twitter.com/"){
            if (contacts.twitter == "twitter.com/") {
                dispatch(setTwitter(data?.visit?.contacts?.twitterLink!))
            }
            if (contacts.twitter.length){
                icons.push({type: IconType.twitter,  
                    link:contacts.twitter,
                    onClick: () => {
                        window.open(urlize(contacts.twitter))
                    }
                });
            }
        }
    } catch{}
        
    
    if (data?.visit?.contacts?.website){
        if (contacts.web == "None") {
            console.log(data, contacts.vk)
            dispatch(setWeb(data?.visit?.contacts?.website!))
        }
        if (contacts.web.length){
        icons.push({type: IconType.web,  
            link:contacts.web,
            onClick: () => {
                window.open(urlize(contacts.web))
            }
        });}
    }
    
    if (data?.visit?.contacts?.whatsappLink){
        if (contacts.whatsapp == "None") {
            dispatch(setWhatsapp(data?.visit?.contacts?.whatsappLink!))
        }
        if (contacts.whatsapp.length){
        icons.push({type: IconType.ws,  
            link:contacts.whatsapp,
            onClick: () => {
                window.open("https://api.whatsapp.com/send?phone=" + contacts.whatsapp.replaceAll("+", "").replaceAll(" ", ""))
            }
        });}
    }
    try{
        if (data?.visit?.contacts?.vkLink != "vk.com/"){
            if (contacts.vk == "vk.com/") {
                dispatch(setVk(data?.visit?.contacts?.vkLink!))
            }
            if (contacts.vk.length){
            icons.push({type: IconType.vk,  
                link:contacts.vk,
                onClick: () => {
                    window.open(urlize(contacts.vk))
                }
            });}
        }
    } catch{}
        
    try{
        if (data?.visit?.contacts?.tgLink != "t.me/"){
            if (contacts.tg == "t.me/") {
                dispatch(setTg(data?.visit?.contacts?.tgLink!))
            }
            if (contacts.tg.length){
            icons.push({type: IconType.tg,  
                link:contacts.tg,
                onClick: () => {
                    window.open(urlize(contacts.tg))
                }
            });}
        }
    } catch{}
        
    try{
        if (data?.visit?.contacts?.instLink != "instagram.com/"){
            if (contacts.inst == "instagram.com/") {
                dispatch(setInst(data?.visit?.contacts?.instLink!))
            }
            if (contacts.inst.length){
            icons.push({type: IconType.inst,  
                link:contacts.inst,
                onClick: () => {
                    window.open(urlize(contacts.inst))
                }
            });}
        }
    } catch{}
        
    
    if (data?.visit?.contacts?.phone){
        if (contacts.tel == "None") {
            dispatch(setFacebook(data?.visit?.contacts?.phone!))
        }
        if (contacts.tel.length){
        icons.push({type: IconType.tel,  
            link:contacts.tel,
            onClick: () => {
                isIos(profile.midname, profile.surname, profile.name, contacts.tel, () => {
                    setTel(contacts.tel)
                })
            
            }
        });}
    }
    
    if (profile.name == "None"){
        dispatch(setName(data?.visit?.name || ""))
    }

    if (profile.surname == "None"){
        dispatch(setSurname(data?.visit?.surname || ""))
    }

    if (profile.midname == "None") {
        dispatch(setMidname(data?.visit?.midname || ""))
    }

    if (profile.position == "None") {
        dispatch(setPosition(data?.visit?.positionInCompany || ""))
    }

    if (profile.image_cords.x == -1){
        dispatch(setCoords({
            x: data?.visit?.xLogo!,
            y: data?.visit?.yLogo!
        }))
    }

    if (profile.zoom == -1) {
        dispatch(setZoom(
            data?.visit?.zoomLogo!
        ))
    }

    if (profile.cropped_img == "None"){
        dispatch(setCroppedImg(
            data?.visit?.fullImgUrl || ""
        ))
    }

    
    if (profile.description_first == "None"){
        dispatch(setDescriptionFirst(data?.visit?.description || ""))
    }

    if (profile.description_second == "None") {
        dispatch(setDescriptionSecond(data?.visit?.secondDescr || ""))
    }

    if (projects.length == 0) {
        data?.visit?.projectSet.edges.map((e) => {
            dispatch(addProject({
                name: e?.node?.name!,
                id: e?.node?.id!,
                link: e?.node?.link!
            }))
        })
    }

    if (profile.project_head == "None") {
        dispatch(setProjectHead(data?.visit?.projectDescr || ""));
    }

    if (images.length == 0) {
        console.log(data?.visit?.photoSet.edges)
        if (data?.visit?.photoSet.edges.length){
        data?.visit?.photoSet.edges.map((e) => {
            dispatch(addImg({
                url:e?.node?.url!,
                id: e?.node?.id!
            }))
        })}
    }

    if (profile.img_head == "None") {
        dispatch(setImgHead(data?.visit?.photoDescr || ""));
    }

    if (geo.lat == 0) {
        dispatch(changeGeo({
            lat: data?.visit?.geopos?.lattitude || 0,
            long: data?.visit?.geopos?.longitude || 0
        }))
    }

    if (profile.map_head == "None") {
        dispatch(setMapHead(data?.visit?.geoDescr || ""))
    }

    if (profile.block_descr == "None") {
        dispatch(setBlockDescr(data?.visit?.blockDescr!))
    }

    var a = profile.is_dark
    
    if (a == "None") {
        dispatch(setTheme(data?.visit?.theme || "Light"))
    }

    const theme = (profile.is_dark == "Dark");
    if (theme) {
        window.document.body.style.setProperty("--back-color", "rgba(28, 33, 37, 1)");
    }
    
    if (!blocks.length) {
        data?.visit?.blockSet.edges.map(e => {
            dispatch(addBlock({
                name: e?.node?.name!,
                id: e?.node?.id!,
                descr: e?.node?.descr!,
                open: false,
                main_title: e?.node?.mainPart!
            }))
            return e;
        })
    }
    var photos:string[][] = [];
    var photo_buffer = [""];
    photo_buffer = [];
    
    for (var i = 0; i < images.length; i++) {
        if ((i) % 3 == 0) {
            photos.push(photo_buffer)
            photo_buffer = [];
        }
        
        photo_buffer.push(images[i].url)
    }
    photo_buffer.length ?
    photos.push(photo_buffer) : ""
    if (images.length % 3){
    
    if (photos.length){
    for (var i = 0; i < 4 - photo_buffer.length; ++i) {
        photos[photos.length-1].push("")
    }}}



    var imgCnt = 0;
    return <div className="view-card__global-container">
        {
            ReactDOM.createPortal(
                <PencilEditMode dark={theme} onChange={() => {
                    setWithPencil(!withPencil);
                }}></PencilEditMode>,
                window.document.getElementById("pencil")!
            )
        }
        <div className="view-card__container">
            {
                profile.cropped_img.length ?
                <div className="ava__edit-container">
                    <CropperView
                        black={theme}
                        src={profile.cropped_img}
                        zoom={profile.zoom}
                        x={profile.image_cords.x}
                        y={profile.image_cords.y}
                    ></CropperView>
                    {
                        withPencil ? <Pencil className="edit-link" link={"/set/ava"} dark={!theme} width={24} height={24}></Pencil> : ""
                    }
                </div> : ""
            }

            
            
            <div className="view-card__content">
            <div className="name-pos">
                { data?.visit?.positionInCompany?.length ?
                <div className="position">
                    <Text className="position" dark={theme}>
                        {
                            profile.position
                        }
                    </Text>
                    {
                        withPencil ? <Pencil width={16} height={16} link={"/set/position"} className="edit-link" dark={!theme}></Pencil> : ""
                    }
                    
                </div> : ""}
                {
                    data?.visit?.name != null && data.visit.surname != null && data.visit.midname != null ?
                    <div className="fio">
                    <Text dark={theme}>
                    {
                        `${profile.name} ${profile.surname} ${profile.midname}`
                    }
                    </Text>
                    {
                        withPencil ? <Pencil width={18} height={18} link={"/set/creds"} dark={!theme}></Pencil> : ""
                    }
                    
                </div> : ""
                }
            </div>
            <div className="obert">
                <div className={"new__contacts-container" + 
                    (icons.length <= 4 ? " centrize" : "")}>
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

            {
                data?.visit?.projectSet.edges.length ?
                <div className="my-project__global-container">
                <div className="edit__heading">
                <Text className="my-project__heading tal" dark={theme}>
                    {profile.project_head}
                </Text>
                {
                    withPencil ? 
                    <Pencil width={18} height={18} link="/set/projects" dark={!theme}></Pencil>
                    : ""
                }  
                </div>
                <div className="my-projects__container">
                    {
                        projects.map((e) =>
                        <a href={e.link} className="project-link">
                            <Block className="proj-container">
                                    {e.name}
                            </Block>
                        </a>
                        
                        )
                    }
                </div>
            </div> : ""
            }
            {
                blocks.length ?
                <div className="blocks__container" style={{gap: 0}}>
                <div className="blocks__header">
                    <Text dark={theme}>
                        {
                            profile.block_descr
                        }
                    </Text>
                    {
                        withPencil ?
                        <Pencil dark={!theme} width={18} height={18} link="/set/blocks" className="block__pencil"></Pencil>
                        : ""
                    }
                </div>
            <div className="blocks">
                {
                    blocks.map((e) => {
                        return <Block onClick={() => {
                            dispatch(editBlockAction({
                                id: e.id,
                                name: e.name,
                                descr: e.descr,
                                open: !e.open,
                                main_title: e.main_title
                            }))
                        }} posClassName="block__container" className={"block__container-class" +
                        (" block__container block-container__light")}>
                        <Text className="heading block__end" dark={theme}>
                            {e.name}
                        </Text>
                        <Text className="block__content" dark={theme}>
                            {e.descr.slice(0, e.open ? e.descr.length : Math.min(e.descr.length, 47)) + (
                                e.descr.length > 50 && !e.open ? "..." : ""
                            )}
                        </Text>
                        {
                            e.open ? 
                            <Text dark={theme} className="block__main-part">
                                {e.main_title}
                            </Text> : ""
                        }
                        <div className="block__image">
                            <img src={
                               theme ? "/static/images/arrowDownDark.svg" : "/static/images/arrowDown.svg"
                            } className={e.open ? "reversed" : ""} style={{transform: (!e.open ? "rotate(180deg);" : "")}} alt=""  />
                        </div>
                        
                    </Block>
                    })
                }
            </div> 
            </div> : ""
            }
            
            
            
            
            {
                images.length ?
                <div className="my-image__container">
                <div className="edit__heading">
                    <Text className="my-image__header tal" dark={theme}>
                        {profile.img_head}
                    </Text>
                    {
                        withPencil ?
                        <Pencil width={18} height={18} link="/set/photos" dark={!theme}></Pencil>
                        : ""
                    }
                </div>
                
                <div className="my-images__content">
                    {
                        photos.map((e) => {
                            return <div className="images__row">
                                {
                                    e.map((ee) => {
                                        console.log(imgRef.current)
                                        return <div className="images__container">
                                            <img src={ee} alt="" ref={imgRef} className="images__container-image" 
                                            onLoad={() => {
                                                var imgElements = window.document.getElementsByClassName("images__container-image")
                                                for (let i = 0; i < imgElements.length; ++i) {
                                                    console.log(imgElements[i], (imgElements[i] as any).naturalWidth, (imgElements[i] as any).naturalHeight)
                                                    
                                                    if ((imgElements[i] as any).naturalWidth > (imgElements[i] as any).naturalHeight) {
                                                        (imgElements[i] as any).style.height = "100%";
                                                        (imgElements[i] as any).style.width = "auto";
                                                    } else {
                                                        (imgElements[i] as any).style.width= "100%";
                                                        (imgElements[i] as any).style.height = "auto";
                                                    }
                                                }
                                            }} />
                                        </div> 
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div> : ""
            }
            
            

            
            {
                geo.lat ? <div>
                    <div className="map__heading edit__heading">
                        <Text dark={theme}>{
                            profile.map_head
                        }</Text>
                        {
                            withPencil ? 
                            <Pencil width={18} height={18} link={"/set/map"} dark={!theme}></Pencil>
                            : ""
                        }
                    </div>
                    <div className="map-container">
                <YMaps>
                    <Map
                        defaultState={{ center: [
                            geo.lat,
                            geo.long
                        ], zoom: 12 } }
                        width="calc(100% - 0px)"
                    >

                        <Placemark geometry={[
                            geo.lat,
                            geo.long
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