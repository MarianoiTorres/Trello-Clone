import { createReducer, on } from "@ngrx/store";
import { ProjectModel } from "src/app/models/interfaces/Project.interface";
import { loadProjects, projectsLoaded, projectsRecentlyLoaded } from "../actions/project.action";
import { ProjectState } from "src/app/models/states/Project.state";

export const initialState: ProjectState = {loading: false, projects: [], projectsRecentlyViewed: []}

export const projectReducer = createReducer(
    initialState, 
    on(projectsLoaded,(state, {projects}) => {
        return {...state, loading: true, projects}
    }),
    on(projectsRecentlyLoaded, (state, {projects}) => {
        return {...state, loading: true, projectsRecentlyViewed: projects}
    })
)