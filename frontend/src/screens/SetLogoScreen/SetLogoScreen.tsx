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

import {setCroppedImg} from "../../store/profileReducer";
import { CropperView } from "../../uikit/Cropper/CropperView";

export const SetLogoScreen:react.FC = () => {
    const [setAva] = useSetAvaMutation();
    const [setFullPhoto] = useSetFullPhotoMutation();

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


    return <>
        <div className="set-logo__container">
            <Navigation currentName={"Аватарка"} nextName={"ФИО"} nextLink={"/set/creds"}></Navigation>
            <div className="set-logo__content">
                <MyCropper onChange={() => {}} src={
                    avaPath.length ? avaPath : data?.getVisitByUser?.fullImgUrl!
                }></MyCropper>
               <ImageUpload className="img-upl" onChange={
                   (e:File) => {
                       setFullPhoto({variables:{
                           id:data?.getVisitByUser?.id!,
                           photo: e
                       }}).then((e) => {
                           setAvaPath(e.data?.changeFullPhoto?.newUrl!)
                       })
                   }}>
                   Загрузить новую
               </ImageUpload>
                <Button type={ButtonTypes.white}>
                    Удалить
                </Button>
                <ShowCardButton></ShowCardButton>
            </div>
            
        </div>
        
    </>
}