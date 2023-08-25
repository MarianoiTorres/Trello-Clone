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

export const createNewProject = createAction(
    '[New Project] Create project',
    props<{project: any}>()
)

export const addProject = createAction(
    '[Add project] Add project',
    props<{project: any}>()
)

export const clearProjectState = createAction(
    '[Clear Projects] Clear Projects'
)

export const deleteProject = createAction(
    '[Delete Project] Delete project',
    props<{projectId: string}>()
)
