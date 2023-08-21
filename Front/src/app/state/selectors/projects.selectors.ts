import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProjectState } from "src/app/models/states/Project.state";

export const selectProjectsFeature = (state: AppState) => state.projects

export const selectProjects = createSelector(
    selectProjectsFeature,
    (state: ProjectState) => state.projects
)     

export const searchProjects = createSelector(
    selectProjectsFeature,
    (state: ProjectState, props: {name: string}) => {
        if (!props.name) {
            return props.name;
          }
          return state.projects.filter(project =>
            project.name.toLowerCase().includes(props.name.toLowerCase())
          );
    }
    
)     

export const getPersonalProjects = createSelector(
  selectProjectsFeature,
  (state: ProjectState, props: {userId: string}) => {
    return state.projects.filter((project) => project.userCreator === props.userId)
  }
)
