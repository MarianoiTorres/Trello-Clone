import { Project } from "../../interfaces/project"
import ProjectModel from "../../models/projectModel"

const getAllProjects = async(id: string) => {
    const allProjects = await ProjectModel.find({member: {$in: [id]}}).exec()
    return allProjects
}

const getProjectById = async(id: string) => {
    const project = await ProjectModel.findOne({_id: id})
    return project
}

const createNewProject = async(body: Project) => {
    const newProject = await ProjectModel.create(body)
    return newProject
}

const deleteProjectCtrl = async(id: string) => {
    const projectDeleted = await ProjectModel.deleteOne({_id: id})
    return projectDeleted
}

const addMemberProject = async(id: string) => {

}

export {
    getAllProjects,
    getProjectById,
    createNewProject,
    deleteProjectCtrl,
    addMemberProject
}