import { createReducer, on } from "@ngrx/store";
import { addProject, clearProjectState, deleteProject, projectsLoaded } from "../actions/project.action";
import { ProjectState } from "src/app/models/states/Project.state";

export const initialState: ProjectState = {loading: false, projects: []}

export const projectReducer = createReducer(
    initialState, 
    on(projectsLoaded,(state, {projects}) => {
        return {...state, loading: true, projects}
    }),
    on(addProject, (state, {project}) => {
        return {...state, projects: [...state.projects, project]}
    }),
    on(clearProjectState, (state) => {
        return {...state, projects: []}
    }),
    on(deleteProject, (state, {projectId}) => {
        const projects = state.projects.filter((project) => project._id !== projectId)
        return {...state, projects: projects}
    })
)