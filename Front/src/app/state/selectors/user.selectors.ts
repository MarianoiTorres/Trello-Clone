import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "src/app/models/states/User.state";

export const selectorUserFeature = (state: AppState) => state.user

export const selectUser = createSelector(
    selectorUserFeature,
    (state: UserState) => state.user
)     