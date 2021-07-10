import react, { useState } from "react";
import { Block } from "../../uikit/Block/Block";
import { Footer } from "../../uikit/Footer/Footer";
import { Header } from "../../uikit/Header/Header";
import { Text } from "../../uikit/Text/Text";

import ReactDom from "react-dom";

import "./style.css";
import { ChangeImgPopUp } from "../../uikit/PopUps/ChangeImgPopUp/ChangeImgPopUp";
import { Image } from "../../uikit/Image/Image";

import {
    useGetImageQuery, 
    useAddImgMutation, 
    useDeleteImgMutation, 
    useChangeImgMutation,
    useChangeImageDescrMutation
} from "../../generated/graphql";
import { Input } from "../../uikit/Input/Input";
import { Navigation } from "../../uikit/Navigation/Navigation";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";

import {useDispatch, useStore} from "react-redux";
import {setImgHead} from "../../store/profileReducer"

import {editImg, addImg, removeImg} from "../../store/PhotoReducer";

export const PhotoScreen:react.FC = () => {


    const dispatch = useDispatch();
    const store = useStore();

    const [addImgM] = useAddImgMutation();
    const [delImg] = useDeleteImgMutation();
    const [changeImg] = useChangeImgMutation();
    const [changeDescr] = useChangeImageDescrMutation();

    const [editing, setEditing] = useState("");

    const [photos, setPhotos] = useState<{url:string; id:string}[]>();

    const {loading, data} = useGetImageQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted:(e) => {
            e.getVisitByUser?.photoSet.edges.map((e) => 
            {
                dispatch(addImg({id: e?.node?.id!, url: e?.node?.url!}))
                return e;
            })
            setPhotos(e.getVisitByUser?.photoSet.edges.map(
                (e) => {return {url:e!.node!.url!, id:e!.node!.id!}!} 
            ))
        }
    });
    


    if (loading) {
        return <div></div>
    }

 
    return <div className="photo__container">
            <Navigation currentName="Картинки" nextLink="/set/map" nextName="Геолокация"></Navigation>

            <Input className="input__name-photo" 
            placeholder={"Описание в визитке"} 
            onChange={(e:string) => {
                changeDescr({variables:{
                    card_id: data?.getVisitByUser!.id,
                    image_descr: e
                }});
                dispatch(setImgHead(e))
            }} value={data?.getVisitByUser!.photoDescr}></Input>

            <div className="photo__content">
                {
                    photos?.map((e) => <div onClick={() => {
                        setEditing(e.id);
                    }}>
                        <Image src={e.url}></Image>
                    </div>)
                }
                
            </div>
            <Block className="photo__container-local add_photo">
                    <label htmlFor="image">
                        <div>Добавить +</div>
                    </label>
                    <input type="file" id="image" accept="image/*" onChange={(e:any) => {
                        var elem = document.getElementById("image")! as any;
                        addImgM({variables:{
                            card_id: data?.getVisitByUser?.id, 
                            image: elem.files[0]  
                        }}).then((e) => {
                            setPhotos(photos?.concat([{
                                url:e.data?.addPhoto?.photo?.url!,
                                id:e.data?.addPhoto?.photo?.id!}]))
                            dispatch(addImg({
                                url:e.data?.addPhoto?.photo?.url!,
                                id:e.data?.addPhoto?.photo?.id!}));
                            console.log(store.getState())
                        })
                
                    }}/>
                </Block>
            <ShowCardButton></ShowCardButton>
            {
            editing.length ?
            ReactDom.createPortal(
                <ChangeImgPopUp
                
                crossClick={() => {setEditing("")}}
                changeClick={(img:File) => {
                    
                    changeImg({
                        variables:{
                            id:editing,
                            new_img:img
                        }
                    }).then((data) => {
                        dispatch(editImg({
                            url: data.data?.editPhoto?.newImg?.url!,
                            id: editing
                        }))
                        console.log(store.getState());
                        setPhotos(photos?.map((e) => {
                            return e.id == editing ?
                            {
                                url: data.data?.editPhoto?.newImg?.url!,
                                id: e!.id
                            } : e
                        }))
                        setEditing("")

                    })

                }}
                deleteClick={() => {
                    dispatch(removeImg(editing))
                    delImg({variables:{
                        img_id: String(editing)
                    }});
                    setPhotos(photos!.filter((e) => 
                        {return e.id != editing }));
                    setEditing("");
                }}
                
                ></ChangeImgPopUp>,
                document.getElementById("message")!
            ) : ""
        }
        </div>
        
}