import { ProjectModel } from "../interfaces/Project.interface";

export interface ProjectState {
    loading: boolean,
    projects: ReadonlyArray<ProjectModel>
} 