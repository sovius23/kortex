import {createSlice, createSelector, PayloadAction} from "@reduxjs/toolkit";
import { RootType } from "./store";


interface IImages{
    images: IImage[];
}

interface IImage{
    url:string;
    link_to_inst?:string;
    id:string;
}

const initalState:IImages = {
    images: []
}

const imagesSlice = createSlice({
    name : "images",
    initialState:initalState,
    reducers: {
        addImg(state, action:PayloadAction<IImage>) {
            state.images = state.images.concat([action.payload])
        },
        removeImg(state, action:PayloadAction<string>) {
            state.images = state.images.filter((e) => e.id != action.payload)
        },
        editImg(state, action:PayloadAction<IImage>) {
            state.images = state.images.map(
                (e) => {return e.id == action.payload.id ? action.payload : e})
        },
        setImages(state, action:PayloadAction<IImage[]>) {
            state.images = action.payload;
        }
    }
})

export const {removeImg, addImg, editImg, setImages} = imagesSlice.actions;

export default imagesSlice.reducer

interface IStore{
    imagesReducer:IImages;
}

export const getImages = createSelector(
    (store:RootType) => store.photoReducer.images,
    images => images)