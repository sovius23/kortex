import {createSlice, createSelector, PayloadAction} from "@reduxjs/toolkit";
import { RootType } from "./store";


interface INewId{
    newId:string;
}

var initState:INewId = {
    newId:""
}

var newIdSlice = createSlice({
    name: "newId",
    initialState: initState,
    reducers: {
        changeNewId: (state, action:PayloadAction<string>) => {
            state.newId = action.payload;
        }
    }
})

export const {changeNewId} = newIdSlice.actions

export default newIdSlice.reducer

export const getId = createSelector(
    (store:RootType) => store.newIdReducer.newId,
    (newId) => newId
)