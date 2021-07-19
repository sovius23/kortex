import react, {useState} from "react";

import "./style.css";
import { Navigation } from "../../uikit/Navigation/Navigation";

import {useSelector, useDispatch, useStore} from "react-redux";
import { ShowCardButton } from "../../uikit/ShowCardButton/ShowCardButton";
import { RootType } from "../../store/store";
import { Button, ButtonTypes } from "../../uikit/Button/Button";

import {addBlock, getBlocks, editBlockAction, removeBlock} from "../../store/BlockReducer";
import { Block } from "../../uikit/Block/Block";
import { CreateBlockPopUp } from "../../uikit/PopUps/CreateBlockPopUp/CreateBlockPopUp";
import {createPortal} from "react-dom";

import {useCreateBlockMutation, useGetBlocksQuery, useChangeBlockMutation, useDeleteBlockMutation} from "../../generated/graphql";
import { ChangeBlockPopUp } from "../../uikit/PopUps/ChangeBlockPopUp/ChangeBlockPopUp";


export const SetBlockScreen:react.FC = () => {

    const dispatch = useDispatch();

    const blocks = useSelector(getBlocks);

    const [createBlockServer] = useCreateBlockMutation();
    const [changeBlockServer] = useChangeBlockMutation();
    const [deleteBlockServer] = useDeleteBlockMutation();

    const {data, loading} = useGetBlocksQuery({variables:{token:localStorage.getItem("token")}})
    
    window.document.body.style.setProperty("--back-color", "#fff");

    const [createBlock, setCreateBlock] = useState(false);
    const [editBlock, setEditBlock] = useState("");

    if (loading) {
        return <div></div>
    }

    if (blocks.length == 0) {
        data?.getVisitByUser?.blockSet.edges.map(e => {
            dispatch(addBlock({
                open: false,
                name: e?.node?.name!,
                id: e?.node?.id!,
                descr: e?.node?.descr!
            })) 
            return e;
        })
    }

    return <>
        <div className="descr__container">
            <Navigation nextLink="/set/contacts" nextName="Контакты" currentName="Блоки"></Navigation>
            <div className="blocks__container">
                {
                    blocks.map(e => {
                        return <div onClick={() => {
                            setEditBlock(e.id)
                        }}>
                                <Block className="full-scr">
                                    {e.name}
                                </Block>
                            </div>
                    })
                }
            </div>
            <Button className="add-btn" type={ButtonTypes.white} onClick={() => {
                setCreateBlock(true)
            }}>Добавить +</Button>
            <ShowCardButton></ShowCardButton>
            {
                createBlock ?
                createPortal(<CreateBlockPopUp onCreate={(descr, name) => {
                    createBlockServer({variables:{
                        descr: descr,
                        name: name,
                        cardId: data?.getVisitByUser?.id!
                    }}).then((e) => {
                        console.log(e)
                        dispatch(addBlock({
                            descr: descr,
                            name: name,
                            id: e.data?.createBlock?.block?.id!,
                            open: false
                        }))
                        setCreateBlock(false)
                    })
                }} onDelete={() => {
                    setCreateBlock(false);
                }}></CreateBlockPopUp>, 
                    window.document.getElementById("message")!) : ""
            }
            {
                editBlock.length != 0 ?
                createPortal(<ChangeBlockPopUp onCrossFunc={() => {setEditBlock("")}}
                onDeleteFunc={() => {
                    deleteBlockServer({variables:{
                        blockId: editBlock
                    }});
                    dispatch(removeBlock(editBlock))
                    setEditBlock("")
                }}
                onEditFunc={(name, descr) => {
                    changeBlockServer({variables:{
                        name: name,
                        descr: descr,
                        blockId: editBlock
                    }})
                    dispatch(editBlockAction({
                        id: editBlock,
                        name: name,
                        descr:descr,
                        open:false
                    }))
                    setEditBlock("")
                }}
                name={blocks.filter(e => editBlock == e.id)[0]!.name}
                descr={blocks.filter(e => editBlock == e.id)[0]!.descr}
                ></ChangeBlockPopUp>, window.document.getElementById("message")!) : ""
            }
        </div>

    </>
}