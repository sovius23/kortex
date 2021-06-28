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

export const PhotoScreen:react.FC = () => {

    const [addImg] = useAddImgMutation();
    const [delImg] = useDeleteImgMutation();
    const [changeImg] = useChangeImgMutation();
    const [changeDescr] = useChangeImageDescrMutation();

    const [editing, setEditing] = useState("");

    const [photos, setPhotos] = useState<{url:string; id:string}[]>();

    const {loading, data} = useGetImageQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted:(e) => {
            console.log(e, "e")
            setPhotos(e.getVisitByUser?.photoSet.edges.map(
                (e) => {return {url:e!.node!.url!, id:e!.node!.id!}!} 
            ))
        }
    });
    


    if (loading) {
        return <div></div>
    }


    return <div className="global-photo__container">
        <div className="photo__container">
            <Header>Картинки</Header>
            <div className="photo__content">
                {
                    photos?.map((e) => <div onClick={() => {
                        setEditing(e.id);
                    }}>
                        <Image src={e.url}></Image>
                    </div>)
                }
                <Block className="photo__container-local">
                    <label htmlFor="image">
                        <Text>Добавить +</Text>
                    </label>
                    <input type="file" id="image" accept="image/*" onChange={(e:any) => {
                        var elem = document.getElementById("image")! as any;
                        console.log(data);
                        addImg({variables:{
                            card_id: data?.getVisitByUser?.id, 
                            image: elem.files[0]  
                        }}).then((e) => {
                            setPhotos(photos?.concat([{
                                url:e.data?.addPhoto?.photo?.url!,
                                id:e.data?.addPhoto?.photo?.id!}]))
                        })
                    }}/>
                </Block>
            </div>
            <Input className="input__name-photo" 
            placeholder={"Описание в визитке"} 
            onChange={(e:string) => {
                changeDescr({variables:{
                    card_id: data?.getVisitByUser!.id,
                    image_descr: e
                }})
            }} value={data?.getVisitByUser!.photoDescr}></Input>
            <Footer link={"/set/map"}>Геолокация</Footer>
        </div>
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