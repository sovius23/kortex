import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";


interface IinitialState{
    tg:string;
    inst:string;
    twitter:string;
    vk:string;
    whatsapp:string;
    tel:string;
    web:string;
    facebook:string;
}

const initialState:IinitialState = {
    tg: "None",
    inst: "None",
    twitter: "None",
    vk: "None",
    whatsapp: "None",
    tel: "None",
    web: "None",
    facebook: "None"
}

const contactsSlice = createSlice({
    name: "contactsSlice",
    initialState: initialState,
    reducers: {
        setTg(state, action:PayloadAction<string>) {
            state.tg = action.payload
        },
        setInst(state, action:PayloadAction<string>) {
            state.inst = action.payload
        },
        setTwitter(state, action:PayloadAction<string>) {
            state.twitter = action.payload
        },
        setVk(state, action:PayloadAction<string>) {
            state.vk = action.payload
        },
        setWhatsapp(state, action:PayloadAction<string>) {
            state.whatsapp = action.payload
        },
        setTel(state, action:PayloadAction<string>) {
            state.tel = action.payload
        },
        setWeb(state, action:PayloadAction<string>) {
            state.web = action.payload
        },
        setFacebook(state, action:PayloadAction<string>) {
            state.facebook = action.payload;
        }
    }
})

interface IState{
    contactsReducer:IinitialState;
}

export const getTg = createSelector(
    (state:IState) => state.contactsReducer.tg,
    tg => tg
)

export const getFacebook = createSelector(
    (state:IState) => state.contactsReducer.facebook,
    facebook => facebook
)

export const getTel = createSelector(
    (state:IState) => state.contactsReducer.tel,
    tel => tel
)

export const getVk = createSelector(
    (state:IState) => state.contactsReducer.vk,
    vk => vk
)

export const getWhatsapp = createSelector(
    (state:IState) => state.contactsReducer.whatsapp,
    whatsapp => whatsapp
)

export const getTwitter = createSelector(
    (state:IState) => state.contactsReducer.twitter,
    twitter => twitter
)

export const getInst = createSelector(
    (state:IState) => state.contactsReducer.inst,
    inst => inst
)

export const getWeb = createSelector(
    (state:IState) => state.contactsReducer.web,
    web => web
)

export const {setFacebook, setWeb, setWhatsapp, setVk, setTwitter,
                setInst, setTel, setTg} = contactsSlice.actions


export default contactsSlice.reducer