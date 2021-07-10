import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";

import store from "./store";

interface IProjects{
    projects:IProject[]
}

interface IProject{
    name:string;
    link:string;
    id:string;
}

const initialState:IProjects = {
    projects: []
}

const projectSlice = createSlice({
    name: "projects",
    initialState:initialState,
    reducers: {
        addProject(state, action:PayloadAction<IProject>) {
            state.projects = state.projects.concat([action.payload]);
        },
        removeProject(state, action:PayloadAction<string>) {
            state.projects = state.projects.filter((e) => e.id != action.payload);
        },
        changeProject(state, action:PayloadAction<{id:string, project:IProject}>){
            state.projects = state.projects.map(
                (e) => e.id == action.payload.id ? action.payload.project : e
                )
        }
    }
})

interface IStore{
    projectReducer: IProjects;
}

export const getProjects = createSelector(
    (store:IStore) => store.projectReducer.projects,
    projects => projects
)

export const {addProject, removeProject, changeProject} = projectSlice.actions;

export default projectSlice.reducer;