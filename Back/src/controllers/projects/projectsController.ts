import { Project } from "../../interfaces/project";
import ProjectModel from "../../models/projectModel";
import QueryString from "qs";

const getAllProjects = async (userId: string) => {
  const allProjects = await ProjectModel.find({
    member: { $in: [userId] }, // in = que dentro del array de member este userId
  }).exec(); //exec convierte la consulta en un array
  return allProjects;
};

const getProjectById = async (id: string) => {
  const project = await ProjectModel.findOne({ _id: id });
  return project;
};

const createNewProject = async (body: Project) => {
  const newProject = await ProjectModel.create(body);
  return newProject;
};

const deleteProjectCtrl = async (
  id: string,
  userId:
    | string
    | string[]
    | QueryString.ParsedQs
    | QueryString.ParsedQs[]
    | undefined
) => {
  const project = await ProjectModel.findOne({ _id: id }); 
  
  if (project?.userCreator.toString() === userId) {
    const projectDeleted = await ProjectModel.deleteOne({ _id: id });
    return projectDeleted;
  }
  else 
  {
    return {message: "solo el creador del proyecto puede eliminarlo"}
  }
};

const addMemberProject = async (id: string, userId: string) => {
  const projectUpdated = await ProjectModel.updateOne(
    { _id: id },
    { $push: { member: userId } }
  );
  return projectUpdated;
};

const deleteUserOfProject = async (id: string, userId: string) => {
  const userDeleted = await ProjectModel.updateOne(
    { _id: id },
    { $pull: { member: userId } }
  );
  return userDeleted;
};

export {
  getAllProjects,
  getProjectById,
  createNewProject,
  deleteProjectCtrl,
  addMemberProject,
  deleteUserOfProject,
};
