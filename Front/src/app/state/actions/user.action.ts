import { createAction, props } from "@ngrx/store";

export const loadUser = createAction(
    '[User] Load user',
    props<{data: any}>()
)

export const userLoaded = createAction(
    '[User] User loaded',
    props<{user: any}>()
)


export const loadProjectId = createAction(
    '[User] Load Project',
    props<{projectId: string}>()
)

export const clearUserState = createAction(
    '[Clear User] Clear User'
)

export const removeProjectRecentlyView = createAction(
    '[Remove ProjectId] Remove projectId',
    props<{projectId: string}>()
)