import { createAction, props } from "@ngrx/store";
import { ProjectModel } from "src/app/models/interfaces/Project.interface";

export const loadProjects = createAction(
    '[Projects] Load projects',
    props<{userId: string}>()
)

export const projectsLoaded = createAction(
    '[Projects] Projects loaded',
    props<{projects: any}>()
)

export const loadProjectsRecently = createAction(
    '[Projects Recently] Load projects recently',
    props<{projectsId: string[]}>()
)

export const projectsRecentlyLoaded = createAction(
    '[Projects Recently Loaded] Projects loaded',
    props<{projects: any}>()
)