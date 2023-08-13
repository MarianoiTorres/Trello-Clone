import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProjectState } from "src/app/models/states/Project.state";

export const selectProjectsFeature = (state: AppState) => state.projects

export const selectProjects = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.projects
)     

export const selectProjectsRecentlyViewed = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.projectsRecentlyViewed
)