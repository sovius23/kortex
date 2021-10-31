import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";
import { StoreType } from "./store";

interface Point{
    position: number[],
    id: number,
    image: string,
    bboxes: {
        type: number,
        sides: number[]
    }
}

interface IGeoSlice{
    points: Point[],
    active?: Point;
}

const initState:IGeoSlice = {
    points: [],
}

const geoSlice = createSlice({
        name: "geoReducer",
        initialState: initState,
        reducers: {
            setPoints(store, payload: PayloadAction<Point[]>) {
                store.points = payload.payload;
            },
            setActive(store, payload: PayloadAction<{id:number}>) {
                store.active = store.points.filter((e) => e.id == payload.payload.id)[0]
            }
        }
    }
)

export const getPoints = createSelector(
    (store:StoreType) => store.points, 
    (points) => points);

export const getActive = createSelector(
    (store:StoreType) => store.active,
    (active) => active
)

export const {setPoints, setActive} = geoSlice.actions;

export default geoSlice.reducer;