import { serializeFetchParameter } from "@apollo/client";
import react, { RefObject, useEffect, useRef, useState } from "react";
 
import {YMaps, Map, SearchControl, Placemark} from "react-yandex-maps";

import {useGetGeoQuery, useSetGeoMutation, useChangeGeoDescrMutation} from "../../generated/graphql";
import { Input } from "../../uikit/Input/Input";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useDispatch} from "react-redux";
import {changeGeo} from "../../store/GeolocationReducer";

import "./style.css";

export const MapScreen:react.FC = () => {

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

    const [text, setText] = useState("");

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

    return <div className="map-screen__container">
            <Navigation nextName="Тема" currentName="Геолокация" nextLink="/set/theme"></Navigation>
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
            geometry={pos}
            properties={{
              balloonContentBody: "Мое местоположение"
            }}
          />
                </Map>
                
            </YMaps>
            <Input
            value={data?.getVisitByUser?.geoDescr}
            className="map__input" placeholder={"Описание в визитке"} 
            onChange={(e:string) => {
                changeDescr({
                    variables: {
                        card_id: data?.getVisitByUser?.id,
                        geo_descr: e
                    }
                })
            }}></Input>
        </div>
}