import react from "react";
import { Block } from "../../uikit/Block/Block";
import { ImageUpload } from "../../uikit/ImageUpload/ImageUpload";
import { Text } from "../../uikit/Text/Text";
import { Arrow } from "../../uikit/uiArrow/Arrow";

import {useGetAvaQuery, useSetAvaMutation} from "../../generated/graphql";


import "./style.css";
import { AvaContainer } from "../../uikit/AvaContainer/AvaContainer";
import { useHistory } from "react-router";

export const SetLogoScreen:react.FC = () => {
    const [setAva] = useSetAvaMutation();
    const {data, loading} = useGetAvaQuery({
        variables:{token:localStorage.getItem("token")},
        onCompleted:(e) => {
            setAvaPath(e.getVisitByUser?.imageUrl!);
        }
    });

    const history = useHistory();

    const [avaPath, setAvaPath] = react.useState("");

    if (loading) {
        return <div></div>
    }


    return <div className="set-logo__global-container">
        <div className="set-logo__container">
            <div className="set-logo__header">
                <div onClick={() => {history.goBack()}} style={{cursor:"pointer"}}>
                    <Arrow>
                    </Arrow>
                </div>

                <Text>Аватарка</Text>
            </div>
            <div className="photo__container">
            {
                avaPath ? <AvaContainer src={avaPath}></AvaContainer> :
                <></>
            }
            </div>

            <ImageUpload className="image-upload__button" onChange={(e:File) => {
                console.log(e);
                setAva({variables:{
                    id:data?.getVisitByUser?.id,
                    ava:e
                }}).then((e) => {
                    console.log(e);
                    setAvaPath(e.data?.changeVisitCardProfilePhoto?.newPath!);
                })
            }}>Загрузить новую</ImageUpload>
            <div className="image-upload__button delete" onClick={() => {
                setAva({variables:{
                    id: data?.getVisitByUser?.id,
                    ava: new File([new Blob([])], "unnamed.u")
                }}).then((e) => {})
                setAvaPath("");
            }}>
                <Block className="delete__button">Очистить</Block>
            </div>
            <div className="set-logo__footer">
                <Text className="set-logo-footer__text">ФИО</Text>
                <div onClick={() => {
                    history.push("/set/creds")
                }} style={{cursor:"pointer"}}>
                    <Arrow reversed></Arrow>
                </div>
                
            </div>
        </div>
    </div>
}