import { createAction, props } from "@ngrx/store";

export const loadUser = createAction(
    '[User] Load user',
    props<{data: any}>()
)

export const userLoaded = createAction(
    '[User] User loaded',
    props<{user: any}>()
)