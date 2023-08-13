import { ActionReducerMap } from "@ngrx/store";
import { ProjectState } from "../models/states/Project.state";
import { projectReducer } from "./reducers/projects.reducers";

export interface AppState {
    projects: ProjectState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    projects: projectReducer
}