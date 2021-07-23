import { serializeFetchParameter } from "@apollo/client";
import react, { RefObject, useEffect, useRef, useState } from "react";
 
import {YMaps, Map, SearchControl, Placemark} from "react-yandex-maps";

import {useGetGeoQuery, useSetGeoMutation, useChangeGeoDescrMutation} from "../../generated/graphql";
import { Input } from "../../uikit/Input/Input";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch, useStore} from "react-redux";
import {changeGeo} from "../../store/GeolocationReducer";

import "./style.css";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { RootType } from "../../store/store";
import { setMapHead } from "../../store/profileReducer";

export const MapScreen:react.FC = () => {
    const store = useStore();
    const [setGeopos] = useSetGeoMutation();
    const [changeDescr] = useChangeGeoDescrMutation();

    

    const dispatch = useDispatch();

    const {data, loading} = useGetGeoQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted: (data) => {
            if (data.getVisitByUser?.geopos?.lattitude != null) {
                setPos([
                    data.getVisitByUser.geopos.lattitude,
                    data.getVisitByUser.geopos.longitude!
                ]);
            }
        }
    })

    const [pos, setPos] = useState([55.75, 37.57]);

    const search = useRef<any>(null);


    if ((store.getState() as RootType).geoReducer.lat == 0) {
        dispatch(changeGeo({
            lat: data?.getVisitByUser?.geopos?.lattitude || 0,
            long: data?.getVisitByUser?.geopos?.longitude || 0
        }))
    }

    

    const onResultShow = () => {
        if (search.current) {
            console.log(search);
            const res = search.current.getResultsArray()[0].geometry._coordinates;
            console.log(res);
            setGeopos({variables:{
                geoId: data?.getVisitByUser?.geopos?.id!,
                lat: res[0],
                long: res[1]
            }})
            dispatch(changeGeo(
                {
                    lat: res[0],
                    long: res[1]
                }
            ))
        }  
    }

    if (loading) {
        return <div></div>;
    }

    if ((store.getState() as RootType).profileReducer.map_head == "None") {
        dispatch(setMapHead(data?.getVisitByUser?.geoDescr || ""))
    }

    window.document.body.style.setProperty("--back-color", "#fff");

    return <div className="map-screen__container">
            <Navigation prevLink="/set/photos" nextName="Тема" currentName="Картинки" nextLink="/set/theme"></Navigation>
            
            <div className="map-container">
            <Input
                value={(store.getState() as RootType).profileReducer.map_head}
                className="map__input" placeholder={"Описание в визитке"} 
                onChange={(e:string) => {
                    changeDescr({
                        variables: {
                            card_id: data?.getVisitByUser?.id,
                            geo_descr: e
                        }
                    });
                    dispatch(
                        setMapHead(e)
                    )
                }}></Input>
                <YMaps  enterprise query={{
                    ns: "use-load-option",
                    apikey: "08d03d75-b54e-4081-a2a6-9fcaddc0ae72"
                }}>
                    <Map defaultState={{ center: pos, zoom: 12 }} width="">
                        <SearchControl onResultShow={() => {
                            onResultShow()
                        }} instanceRef={ref => {
                        if (ref) search.current = ref;
                    }} options={{ float: 'right' }}  />

                        <Placemark
                geometry={[
                    (store.getState() as RootType).geoReducer.lat,
                    (store.getState() as RootType).geoReducer.long
                ]}
                properties={{
                balloonContentBody: "Мое местоположение"
                }}
            />
                    </Map>
                    
                </YMaps>
                <ShowCardButton></ShowCardButton>
            </div>
            
        </div>
}