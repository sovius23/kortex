import { createStore } from "redux";
import { combineReducers } from "redux";
import geoReducer from "./geoSlice";


export const store = createStore(geoReducer);

export type StoreType = ReturnType<typeof store.getState>;