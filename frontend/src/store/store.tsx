import {combineReducers, createStore} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import profileReducer from "./profileReducer";
import contactsReducer from "./ContactsReducer";
import projectReducer from "./ProjectsReducer";
import photoReducer from "./PhotoReducer";
import geoReducer from "./GeolocationReducer";
import blockReducer from "./BlockReducer";
import newIdReducer from "./newIdReducer";
import instReducer from "./InstReducer";

const RootReducer = combineReducers(
    {instReducer, profileReducer, contactsReducer, projectReducer, photoReducer, geoReducer, blockReducer, newIdReducer}
)

export type RootType = ReturnType<typeof RootReducer>

const store = createStore(RootReducer);

export default store