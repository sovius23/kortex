import {createStore} from "redux";

import {createSelector} from "reselect";

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IinitialState{
    name:string;
    email:string;
    surname:string;
    midname:string;
    position:string;
    description_first:string;
    description_second:string;
    is_dark:boolean;
    cropped_img:string;
    img_head:string;
    project_head:string;
    image_cords: ICoord; 
}

interface ICoord{
    x:number;
    y:number;
}

const initialState:IinitialState = {
    name: "",
    email: "",
    surname: "",
    midname: "",
    position: "",
    description_first: "",
    description_second: "",
    is_dark: false,
    cropped_img: "",
    img_head: "",
    project_head:"",
    image_cords : {x:0, y:0}
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setName(state, action:PayloadAction<string>) {
            state.name = action.payload;
        },
        setEmail(state, action:PayloadAction<string>) {
            state.email = action.payload;
        },
        setSurname(state, action:PayloadAction<string>) {
            state.surname = action.payload;
        },
        setMidname(state, action:PayloadAction<string>) {
            state.midname = action.payload;
        },
        setPosition(state, action: PayloadAction<string>) {
            state.position = action.payload
        },
        setDescriptionFirst(state, action: PayloadAction<string>) {
            state.description_first = action.payload;
        },
        setDescriptionSecond(state, action:PayloadAction<string>) {
            state.description_second = action.payload;
        },
        setCroppedImg(state, action:PayloadAction<string>) {
            state.cropped_img = action.payload;
        },
        setTheme(state, action:PayloadAction<boolean>) {
            state.is_dark = action.payload
        },
        setProjectHead(state, action:PayloadAction<string>) {
            state.project_head = action.payload
        },
        setImgHead(state, action:PayloadAction<string>) {
            state.img_head = action.payload
        },
        setCoords(state, action:PayloadAction<ICoord>){
            state.image_cords = action.payload;
        }
    }
})

interface IStore{
    profileReducer:IinitialState;
}

export const getCroppedImg = createSelector(
    (store:IStore) => store.profileReducer.cropped_img,
    img => img
)

export const getIsDark = createSelector(
    (store:IStore) => store.profileReducer.is_dark,
    t => t
)

export const getName = createSelector(
    (store:IStore) => store.profileReducer.name,
    name => name
)

export const getSurname = createSelector(
    (store:IStore) => store.profileReducer.surname,
    surname => surname
)

export const getMidname = createSelector(
    (store:IStore) => store.profileReducer.midname,
    midname => midname
)

export const getEmail = createSelector(
    (store:IStore) => store.profileReducer.email,
    email => email
)

export const getPosition = createSelector(
    (store:IStore) => store.profileReducer.position,
    position => position
)

export const getFirstDescription = createSelector(
    (store:IStore) => store.profileReducer.description_first,
    descr => descr
)

export const getSecondDescription = createSelector(
    (store:IStore) => store.profileReducer.description_second,
    descr => descr
)

export const {setImgHead, setProjectHead, setTheme, setCroppedImg, setName, setMidname, setSurname, setEmail,
                setPosition, setDescriptionFirst, setDescriptionSecond, setCoords} = profileSlice.actions

export default profileSlice.reducer