import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";
import { RootType } from "./store";

interface IBlock{
    name:string;
    descr:string;
    open:boolean;
    main_title:string;
    id:string;
}

interface IBlocks{
    blocks:IBlock[]
}

var initState:IBlocks = {
    blocks:[]
}


const blockSlice = createSlice({
    name: "block",
    initialState: initState,
    reducers: {
        addBlock: (state, action:PayloadAction<IBlock>) => {
            state.blocks = state.blocks.concat([action.payload])
        },
        removeBlock: (state, action:PayloadAction<string>) => {
            state.blocks = state.blocks.filter((e) => e.id != action.payload)
        },
        editBlockAction: (state, action:PayloadAction<IBlock>) => {
            state.blocks = state.blocks.map((e) => {
                return e.id == action.payload.id ? action.payload : e
            })
        }
    }
})

export const getBlocks = createSelector(
    (store:RootType) => store.blockReducer.blocks,
    blocks => blocks
)

export default blockSlice.reducer

export const {addBlock, removeBlock, editBlockAction} = blockSlice.actions