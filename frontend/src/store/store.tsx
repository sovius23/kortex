import {combineReducers, createStore} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import profileReducer from "./profileReducer";
import contactsReducer from "./ContactsReducer";
import projectReducer from "./ProjectsReducer";
import photoReducer from "./PhotoReducer";
import geoReducer from "./GeolocationReducer";

const RootReducer = combineReducers(
    {profileReducer, contactsReducer, projectReducer, photoReducer, geoReducer}
)

const store = createStore(RootReducer);

export default store