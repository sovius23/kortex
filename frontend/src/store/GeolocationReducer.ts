import {createSlice, createSelector, PayloadAction} from "@reduxjs/toolkit";


interface IGeo{
    lat:number;
    long:number;
}

const initialState = {
    lat:0,
    long: 0
}


const geoSlice = createSlice({
    name: "geo",
    initialState:initialState,
    reducers: {
        changeGeo(state, action:PayloadAction<IGeo>) {
            state.lat = action.payload.lat;
            state.long = action.payload.long;
        }
    }
})

export const {changeGeo} = geoSlice.actions;

export default geoSlice.reducer;

interface IStore{
    geoReducer:IGeo;
}

const getGeo = createSelector(
    (store:IStore) => store.geoReducer,
    geo => geo);