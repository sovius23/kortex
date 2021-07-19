import react from "react";
import { Block } from "../../uikit/Block/Block";
import { ImageUpload } from "../../uikit/ImageUpload/ImageUpload";
import { Text } from "../../uikit/Text/Text";
import { Arrow } from "../../uikit/uiArrow/Arrow";

import {useGetAvaQuery, useSetAvaMutation, useSetFullPhotoMutation} from "../../generated/graphql";
import {MyCropper} from "../../uikit/Cropper/Cropper";

import "./style.css";
import { AvaContainer } from "../../uikit/AvaContainer/AvaContainer";
import { useHistory } from "react-router";
import { Navigation } from "../../uikit/Navigation/Navigation";
import { Button, ButtonTypes } from "../../uikit/Button/Button";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";

import {useDispatch, useStore} from "react-redux";

import {setCroppedImg, setZoom, setCoords, setDescriptionFirst} from "../../store/profileReducer";
import { CropperView } from "../../uikit/Cropper/CropperView";
import {useChangeLogoCordsMutation} from "../../generated/graphql";
import { RootType } from "../../store/store";


export const SetLogoScreen:react.FC = () => {
    const [setAva] = useSetAvaMutation();
    const [setFullPhoto] = useSetFullPhotoMutation();
    const [changeLogoCords] = useChangeLogoCordsMutation();

    const dispatch = useDispatch();

    const store = useStore();


    var image = new Number() as any;
    const {data, loading} = useGetAvaQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted:(e) => {
            console.log(e);
            setAvaPath(e.getVisitByUser?.imageUrl!);
        }
    });

    const history = useHistory();

    const [avaPath, setAvaPath] = react.useState("");

    if (loading) {
        return <div></div>
    }

    if (avaPath.length) {
        dispatch(setCroppedImg(avaPath))
    }

    if ((store.getState() as RootType).profileReducer.image_cords.x == -1) {
        dispatch(setCoords(
            {
                x: data?.getVisitByUser?.xLogo!,
                y: data?.getVisitByUser?.yLogo!
            }
        ))
    }

    if ((store.getState() as RootType).profileReducer.zoom == -1) {
        dispatch(setZoom(data?.getVisitByUser?.zoomLogo!))
    }

    if ((store.getState() as RootType).profileReducer.cropped_img == "None") {
        dispatch(setCroppedImg(data?.getVisitByUser?.fullImgUrl || ""))
    }



    window.document.body.style.setProperty("--back-color", "#fff");

    console.log((store.getState() as RootType).profileReducer.cropped_img)

    return <>
        <div className="set-logo__container">
            <Navigation currentName={"Аватарка"} nextName={"ФИО"} nextLink={"/set/creds"}></Navigation>
            <div className="set-logo__content">
                {
                    (store.getState() as RootType).profileReducer.cropped_img || data?.getVisitByUser?.fullImgUrl?.length ||
                    avaPath ?
                    <MyCropper zoom={(store.getState() as RootType).profileReducer.zoom}
                coords={{
                    ...(store.getState() as RootType).profileReducer.image_cords
                    
                }} 
                onChange={(
                    cords:{x:number, y:number}, zoom:number
                ) => {
                    dispatch(setZoom(zoom));
                    dispatch(setCoords(cords));
                    changeLogoCords({variables:{
                        card_id: data?.getVisitByUser?.id!,
                        x: cords.x,
                        y: cords.y,
                        zoom: zoom
                    }});

                }} src={
                    (store.getState() as RootType).profileReducer.cropped_img
                }></MyCropper> : ""
                }
                
               <ImageUpload className="img-upl" onChange={
                   (e:File) => {
                       setFullPhoto({variables:{
                           id:data?.getVisitByUser?.id!,
                           photo: e
                       }}).then((e) => {
                           console.log(e);
                           dispatch(setCroppedImg(e.data?.changeFullPhoto?.newUrl!))
                           setAvaPath(e.data?.changeFullPhoto?.newUrl!)
                       })
                   }}>
                   Загрузить новую
               </ImageUpload>
                <Button type={ButtonTypes.white} onClick={() => {
                    setAvaPath("")
                    dispatch(setCroppedImg(""))
                    dispatch(setCoords({x:-1, y:-1}))
                    setFullPhoto({variables:{
                        id: data?.getVisitByUser?.id!,
                        photo: new File([new Blob([])], __filename="unnamed.u")
                    }})
                }}>
                    Удалить
                </Button>
                <ShowCardButton></ShowCardButton>
            </div>
            
        </div>
        
    </>
}