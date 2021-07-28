import react, {useContext, useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import { isConstTypeReference } from "typescript";

import {useIsCardEmptyQuery, useGetVisitByIdQuery, useGetVisitIdLazyQuery, useIsUserAdminMutation, useIsCardEmptyLazyQuery} from "../../generated/graphql";
import { Block } from "../../uikit/Block/Block";
import { Icon, IconType } from "../../uikit/Icon/Icon";
import { Image } from "../../uikit/Image/Image";
import { Text } from "../../uikit/Text/Text";

import {YMaps, Map, Placemark} from "react-yandex-maps";

import "./style.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { introspectionFromSchema } from "graphql";
import { Theme, ThemeContext } from "../../App";
import { CropperView } from "../../uikit/Cropper/CropperView";
import { Button, ButtonTypes } from "../../uikit/Button/Button";

import {createPortal} from "react-dom";
import { TelPopUp } from "../../uikit/PopUps/ShowTelPopUp/ShowTelPopUp";
import { Line } from "../../uikit/Line/Line";

import {urlize} from "./ViewCardEdit";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import { isIos } from "./platformDetect";

export const ViewCard:react.FC = () => {

    const {id} = useParams<{id:string}>();

    const is_empty_query = useIsCardEmptyQuery({variables:{
        card_id: id
    }})

    const [getData] = useGetVisitIdLazyQuery();

    const {data, loading} = useGetVisitByIdQuery({variables:{id:id}});

    const [showMoreIcons, setShowMoreIcons] = useState(false);

    const {setSwitcherVisibility, setTheme} = useContext(ThemeContext);
    const [flag, setFlag] = useState(false);

    const [isUserAdminCheck] = useIsUserAdminMutation();

    const [tel, setTel] = useState("");

    const history = useHistory();

    const {url} = useRouteMatch();


    useEffect(() => {
        console.log(window.document.getElementsByClassName("images__container"))
        //var w = window.document.getElementsByClassName("images__container")![0].clientWidth;
        var elements = window.document.getElementsByClassName("images__row")
        for (let i = 1; i < elements.length; ++i) {
            
            (elements[i] as any).style.height = `${window.document.getElementsByClassName("images__container")![0].clientWidth}px`;
        }
        
        var imgElements = window.document.getElementsByClassName("images__container-image")
        console.log(imgElements[0])
        setTimeout(() => {
            for (let i = 0; i < imgElements.length; ++i) {
                console.log(imgElements[i], (imgElements[i] as any).naturalWidth, (imgElements[i] as any).naturalHeight)
                
                if ((imgElements[i] as any).naturalWidth > (imgElements[i] as any).naturalHeight) {
                    (imgElements[i] as any).style.height = "100%"
                } else {
                    (imgElements[i] as any).style.width= "100%"
                }
            }
        }, 1000)
        
        
    })

    var [blocks, setBlock] = useState<{name:string, descr:string, id:string, open:boolean;main_title:string;}[]>([]);
    

    if (loading) {
        return <div></div>
    }

    if (!is_empty_query.loading){
        if (is_empty_query.data?.isCardEmpty) {
            history.push(`/${id}/register`)
        }
    }
    
    if (localStorage.getItem("token") != null){ 
    isUserAdminCheck({variables:{
        token:localStorage.getItem("token"),
        cardId: id
    }}).then((e) => {
        console.log(e);
        if (e.data?.isUserAdmin?.isAdmin == true) {
            history.push(`/${id}/view`)
        }
    })}

    if (!flag) {
        setFlag(true);
        setSwitcherVisibility(false);
        setTheme(
            data?.visit!.theme == "Light" ?
                Theme.Light : Theme.Dark);
                
                if (blocks.length == 0){
                    console.log(blocks.length)
                setBlock(data?.visit?.blockSet.edges.map((e) => {
                    return {
                        name: e?.node?.name!,
                        descr: e?.node?.descr!,
                        open: false,
                        id: e?.node?.id!,
                        main_title: e?.node?.mainPart!
                    }
                })!)}
    }

    var icons = [];
    try{
        if (data?.visit?.contacts?.facebookLink != "facebook.com/" &&
        data?.visit?.contacts?.facebookLink?.length){
            icons.push({type: IconType.facebook,  
                link:data?.visit?.contacts?.facebookLink,
                onClick: () => {
                    window.open(urlize(data?.visit?.contacts?.facebookLink!))
                }
            });
        }
    }catch{}
    

    try{
        if (data?.visit?.contacts?.instLink != "instagram.com/" &&
        data?.visit?.contacts?.instLink?.length    
        ){
            icons.push({type: IconType.inst,
                link: data?.visit?.contacts?.instLink,
                onClick: () => {
                    window.open(urlize(data?.visit?.contacts?.instLink!));
                }
            });
        }
    } catch{}
    
    try{
        if (data?.visit?.contacts?.phone){
            icons.push({type: IconType.tel,
            link: data.visit.contacts.phone,
                onClick: () => {
                    isIos(
                        data.visit?.name,
                        data.visit?.surname,
                        data.visit?.midname,
                        setTel(data.visit?.contacts?.phone!)
                    )
                }
            });
        }
    }catch{}
    
    try{
        if (data?.visit?.contacts?.tgLink != "t.me/" && 
        data?.visit?.contacts?.tgLink?.length
        ){
            icons.push({type: IconType.tg,
                link: data!.visit!.contacts!.tgLink,
                onClick: () => {
                    window.open(urlize(data!.visit?.contacts?.tgLink!));
                }
            });
        }
    } catch{}
    
    try{
        if (data?.visit?.contacts?.twitterLink != "twitter.com/"
            && data?.visit?.contacts?.twitterLink?.length    
        ){
            icons.push({type: IconType.twitter,
                link: data?.visit?.contacts?.twitterLink,
                onClick: () => {
                    window.open(urlize(data?.visit?.contacts?.twitterLink!));
                }
            });
        }
    } catch{}
    
    try{
        if (data?.visit?.contacts?.vkLink != "vk.com/" &&
        data?.visit?.contacts?.tgLink?.length){
            icons.push({type: IconType.vk,
                link: data?.visit?.contacts?.vkLink,
                onClick: () => {
                    window.open(urlize(data?.visit?.contacts?.vkLink!));
                }
            });
        }
    }catch{}
    
    
    if (data?.visit?.contacts?.website){
        icons.push({type: IconType.web,
        link: data.visit.contacts.website,
        onClick: () => {
            window.open(urlize(data.visit?.contacts?.website!));
        }
        });
    }
    
    if (data?.visit?.contacts?.whatsappLink){
        icons.push({type:IconType.ws,
            link: data.visit.contacts.whatsappLink,
            onClick: () => {
                window.open("https://api.whatsapp.com/send?phone=" + data.visit?.contacts?.whatsappLink!.replaceAll("+", "").replaceAll(" ", ""));
            }
        });
    }


    if (data?.visit?.theme == "Dark"){
        window.document.body.style.setProperty("--back-color", "rgba(28, 33, 37, 1)");
    }

    
    var photos = [];
    var photo_buffer = [""];
    photo_buffer = [];
    for (var i = 0; i < data?.visit?.photoSet.edges.length!; i++) {
        if ((i) % 3 == 0) {
            photos.push(photo_buffer)
            photo_buffer = [];
        }
        photo_buffer.push(data?.visit?.photoSet.edges[i]?.node?.url!)
    }
    photo_buffer.length ?
    photos.push(photo_buffer) : ""
    if (data?.visit?.photoSet.edges.length! % 3){
    
    if (photos.length){
        for (var i = 0; i < 4 - photo_buffer.length; ++i) {
            photos[photos.length-1].push("")
        }
    }}

    return <div className="view-card__global-container">
        <div className="view-card__container">
            {
                data?.visit?.fullImgUrl ?
                <CropperView
                black={data.visit.theme == "Dark"}
                src={data.visit.fullImgUrl}
                zoom={data.visit.zoomLogo}
                x={data.visit.xLogo}
                y={data.visit.yLogo}
                ></CropperView> : ""
            }

            
            
            <div className="view-card__content">
            <div className="name-pos">
                { data?.visit?.positionInCompany?.length ?
                <div className="position">
                    <Text className="position" dark={data.visit.theme == "Dark"}>
                        {
                            data?.visit?.positionInCompany
                        }
                    </Text>
                </div> : ""}
                {
                    data?.visit?.name != null && data.visit.surname != null && data.visit.midname != null ?
                    <div className="fio">
                    <Text dark={data.visit.theme == "Dark"}>
                    {
                        `${data?.visit?.surname} ${data?.visit?.name} ${data?.visit?.midname}`
                    }
                    </Text>
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
                                <Icon type={e.type} dark={data?.visit?.theme == "Dark"}></Icon>
                            </div>
                        })
                    }
                </div>
            </div>
            {
                blocks.length ?
                <div className="blocks__container" style={{gap: 0}}>
                <div className="blocks__header">
                    <Text dark={data?.visit?.theme == "Dark"}>
                        {
                            data?.visit?.blockDescr
                        }
                    </Text>
                    
                </div>
                <div className="blocks">
                {
                    blocks.map((e) => {
                        return <Block  onClick={() => {
                            setBlock(blocks.map((ee) => {
                                return ee.id == e.id ?
                                {
                                    name :ee.name,
                                    descr: ee.descr,
                                    id: ee.id,
                                    open: !ee.open,
                                    main_title: ee.main_title
                                } : ee
                            }))
                        }} className={"block__container-class" +
                        (" block__container block-container__light")}>
                        <Text className="heading block__end" dark={data?.visit?.theme == "Dark"}>
                            {e?.name}
                        </Text>
                        <Text className="block__content" dark={data?.visit?.theme == "Dark"}>
                            {e?.descr.slice(0, e.open ? e.descr.length : Math.min(e.descr.length, 47)) + (
                                e.descr.length > 50 && !e.open ? "..." : ""
                            )}
                        </Text>
                        {
                            e.open ? 
                            <Text dark={data?.visit?.theme == "Dark"} className="block__main-part">
                                {
                                    e.main_title
                                }
                            </Text> : ""
                        }
                        <div className="block__image">
                            <img src={
                               data?.visit?.theme == "Dark" ? "/static/images/arrowDownDark.svg" : "/static/images/arrowDown.svg"
                            } className={e.open ? "reversed" : ""} style={{transform: (!e.open ? "rotate(180deg);" : "")}} alt=""  
                            />
                        </div>
                        
                    </Block>
                    })
                }
            </div>
            
            </div> : ""
            }
            
            
            {
                data?.visit?.projectSet.edges.length ?
                <div className="my-project__global-container">
                <Text className="my-project__heading tal" dark={data?.visit?.theme == "Dark"}>
                    {data?.visit?.projectDescr}
                </Text>
                <div className="my-projects__container">
                    {
                        data?.visit?.projectSet.edges.map((e) =>
                        <a href={e?.node?.link!} className="project-link">
                            <Block className="proj-container ">
                                <div style={{color: "white"}}>
                                    {e?.node?.name}
                                </div>
                            </Block>
                        </a>
                        
                        )
                    }
                </div>
            </div> : ""
            }
            
            {
                data?.visit?.photoSet.edges.length ?
                <div className="my-image__container">
                <div className="edit__heading">
                    <Text className="my-image__header tal" dark={data.visit.theme == "Dark"}>
                        {data.visit.photoDescr}
                    </Text>
                </div>
                
                <div className="my-images__content">
                    {
                        photos.map((e) => {
                            return <div className="images__row">
                                {
                                    e.map((ee) => {
                                        return <div className="images__container">
                                            <img src={ee} alt="" className="images__container-image" 
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
                                            }}/>
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
                data?.visit?.geopos?.lattitude != null ? <div>
                    <div className="map__heading">
                        <Text dark={data?.visit?.theme == "Dark"}>{
                            data?.visit?.geoDescr
                        }</Text>
                    </div>
                    <div className="map-container">
                <YMaps>
                    <Map
                        defaultState={{ center: [
                            data?.visit?.geopos?.lattitude!,
                            data?.visit?.geopos?.longitude!
                        ], zoom: 12 } }
                        width="calc(100% - 0px)"
                    >

                        <Placemark geometry={[
                            data?.visit?.geopos?.lattitude!,
                            data?.visit?.geopos?.longitude!
                        ]}></Placemark>
                    </Map>
                </YMaps>
            </div>
                </div> : "" 
            }
            
            
        </div>
        {
            url == "/easy" ? 
            <Switch>
                <Route path={`${url}/reg`}>
                    <Registration signUrl={`${url}`}></Registration>
                </Route>
                <Route path="">
                    <Login notRegUrl={`${url}/reg`}></Login>
                </Route>
            </Switch> : ""
        }
        </div>
        {
            tel.length ? 
            createPortal(
                <TelPopUp dark={data?.visit?.theme == "Dark"} delFunc={() => {setTel("")}} tel={tel}></TelPopUp>,
                window.document.getElementById("message")!
            ) : ""
        }
    </div>
}