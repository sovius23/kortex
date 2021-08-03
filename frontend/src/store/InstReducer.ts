import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit"
import { RootType } from "./store"


interface IInstreducer{
    inst_username:string|undefined;
}

const store:IInstreducer = {
    inst_username:undefined
}

const instSlice = createSlice({
    name: "instSlice",
    initialState: store,
    reducers: {
        setInst(store, action:PayloadAction<string>) {
            store.inst_username = action.payload
        }
    }
})


export const getInstUsername = createSelector((store:RootType) => store.instReducer.inst_username, (uname) => uname)

export default instSlice.reducer