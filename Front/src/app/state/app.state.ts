import { ActionReducerMap } from "@ngrx/store";
import { ProjectState } from "../models/states/Project.state";
import { projectReducer } from "./reducers/projects.reducers";
import { UserState } from "../models/states/User.state";
import { userReducer } from "./reducers/user.reducers";

export interface AppState {
    projects: ProjectState,
    user: UserState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    projects: projectReducer,
    user: userReducer
}