import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";
import { StoreType } from "./store";

export interface Point{
    position: number[],
    id: number,
    image: string,
    bboxes: {
        type: number,
        bbox: number[]
    }[],
    name: string;
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
                store.points = payload.payload.map((e) => {
                    return {
                        ...e,
                        image: e.image.split("?")[0]
                    }
                });
                 
            },
            setActive(store, payload: PayloadAction<{id:number}>) {
                store.active = store.points.filter((e) => e.id == payload.payload.id)[0]
            },
            changePoint(store, payload:PayloadAction<{point_id:number, newFields: Point}>) {
                store.points = store.points.map((e) => {
                    if (payload.payload.point_id == e.id) {
                        return payload.payload.newFields
                    } else {
                        return e
                    }
                })
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

export const {setPoints, setActive, changePoint} = geoSlice.actions;

export default geoSlice.reducer;