import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import geoReducer from "./geoSlice";
import { asyncFunctionMiddleware } from "./middleware";

export const store = createStore(geoReducer, applyMiddleware(asyncFunctionMiddleware));

export type StoreType = ReturnType<typeof store.getState>;