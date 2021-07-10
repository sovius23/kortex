import react, {useContext, useState} from "react";
import { useParams } from "react-router";
import { isConstTypeReference } from "typescript";

import {useGetVisitByIdQuery, useGetVisitIdLazyQuery} from "../../generated/graphql";
import { Block } from "../../uikit/Block/Block";
import { Icon, IconType } from "../../uikit/Icon/Icon";
import { Image } from "../../uikit/Image/Image";
import { Text } from "../../uikit/Text/Text";

import {YMaps, Map, Placemark} from "react-yandex-maps";

import "./style.css";
import { Link } from "react-router-dom";
import { introspectionFromSchema } from "graphql";
import { Theme, ThemeContext } from "../../App";

export const ViewCard:react.FC = () => {

    const {id} = useParams<{id:string}>();

    const [getData] = useGetVisitIdLazyQuery();

    const {data, loading} = useGetVisitByIdQuery({variables:{id:id}});

    const [showMoreIcons, setShowMoreIcons] = useState(false);

    const {setSwitcherVisibility, setTheme} = useContext(ThemeContext);
    const [flag, setFlag] = useState(false);



    if (loading) {
        return <div></div>
    }

    if (!flag) {
        setFlag(true);
        setSwitcherVisibility(false);
        setTheme(
            data?.visit!.theme == "Light" ?
                Theme.Light : Theme.Dark); 
    }

    var icons = [];

    if (data?.visit?.contacts?.facebookLink){
        icons.push({type: IconType.facebook,  
            link:data.visit.contacts.facebookLink});
    }

    
    if (data?.visit?.contacts?.instLink){
        icons.push({type: IconType.inst,
            link: data.visit.contacts.instLink});
    }
    
    if (data?.visit?.contacts?.phone){
        icons.push({type: IconType.tel,
        link: data.visit.contacts.phone});
    }
    
    if (data?.visit?.contacts?.tgLink){
        icons.push({type: IconType.tg,
            link: data.visit.contacts.tgLink});
    }
    
    if (data?.visit?.contacts?.twitterLink){
        icons.push({type: IconType.twitter,
            link: data.visit.contacts.twitterLink});
    }
    
    if (data?.visit?.contacts?.vkLink){
        icons.push({type: IconType.vk,
            link: data.visit.contacts.vkLink});
    }
    
    if (data?.visit?.contacts?.website){
        icons.push({type: IconType.web,
        link: data.visit.contacts.website});
    }
    
    if (data?.visit?.contacts?.whatsappLink){
        icons.push({type:IconType.ws,
            link: data.visit.contacts.whatsappLink});
    }

    return <div className="view-card__global-container">
        <div className="view-card__container">
            {
                data?.visit?.imageUrl ?
                <Block className="ava__container"> 
                <img src={data?.visit?.imageUrl!} alt="" className="ava" />
            </Block> : ""
            }
            
            <div className="view-card__content">
            {
                data?.visit?.name != null && data.visit.surname != null && data.visit.midname != null ?
                <div className="fio">
                <Text>
                {
                    `${data?.visit?.surname} ${data?.visit?.name} ${data?.visit?.midname}`
                }
                </Text>
            </div> : ""
            }
            
            <div className="position">
                <Text className="position">
                    {
                        data?.visit?.positionInCompany
                    }
                </Text>
            </div>
            <div className="descr__container">
                <div className="descr">
                    <Text>
                        {
                            data?.visit?.description
                        }
                    </Text>
                </div>
            </div>
            {
                icons.length ? <div className="contacts">
                <div className="contacts__header">
                    <Text>Мои контакты</Text>
                </div>
                <Block className="icons__container">
                    <div className="icons">
                        { icons.length > 5 && !showMoreIcons ?
                            icons.slice(0, 5).map(e => <a href={e.link}>
                                <Icon type={e.type}></Icon>
                            </a> ) :
                            icons.map(e => <a href={e.link}>
                                <Icon type={e.type}></Icon>
                            </a> )
                        }
                    </div>
                    {
                        icons.length > 5 && !showMoreIcons ? 
                        <div className="show-more__heading" onClick={()=> {
                            setShowMoreIcons(true);
                        }}>
                           <Text>Показать еще...</Text> 
                        </div> : ""
                    }
                    {
                        icons.length > 5 && showMoreIcons ?
                        <div className="show-more__heading" onClick={()=> {
                            setShowMoreIcons(false);
                        }}>
                           <Text>Свернуть...</Text> 
                        </div> : ""
                    }
                </Block>
            </div> : ""
            }
            
            
            <div className="descr__container">
                <div className="descr">
                    <Text>
                        {
                            data?.visit?.secondDescr
                        }
                    </Text>
                </div>
            </div>
            {
                data?.visit?.projectSet.edges.length ?
                <div className="my-project__global-container">
                <Text className="my-project__heading">
                    {data?.visit?.projectDescr}
                </Text>
                <div className="my-projects__container">
                    {
                        data?.visit?.projectSet.edges.map((e) => 
                        <a href={e?.node?.link!}>
                            <Block className="project__container">
                            <Text>
                                {e?.node?.name}

                            </Text>
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
                <Text className="my-image__header">
                    {data?.visit?.photoDescr}
                </Text>
                <div className="my-images__content">
                    {
                        data?.visit?.photoSet.edges.map((e) => 
                            <Image src={e?.node?.url!} className="image-view__container"></Image>)
                    }
                </div>
            </div> : ""
            }
            
            

            
            {
                data?.visit?.geopos?.lattitude != null ? <div>
                    <div className="map__heading">
                <Text>{
                    data?.visit?.geoDescr
                    }</Text>
            </div>
                    <Block className="map-container">
                <YMaps>
                    <Map
                        defaultState={{ center: [
                            data?.visit?.geopos?.lattitude!,
                            data?.visit?.geopos?.longitude!
                        ], zoom: 12 } }
                        width="100%"
                    >

                        <Placemark geometry={[
                            data?.visit?.geopos?.lattitude!,
                            data?.visit?.geopos?.longitude!
                        ]}></Placemark>
                    </Map>
                </YMaps>
            </Block>
                </div> : "" 
            }
            
            
        </div>
        <Link to="/index">
                <Block><Text>Вернуться на главную</Text></Block>
            </Link>
        </div>

    </div>
}