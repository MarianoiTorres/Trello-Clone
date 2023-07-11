import QueryString from "qs";
import { Project } from "../../interfaces/project";
import ProjectModel from "../../models/projectModel";

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

const deleteProjectCtrl = async (id: string, userId: string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined) => {
  const projectDeleted = await ProjectModel.updateOne({ _id: id }, {$pull: {member: userId}});
  return projectDeleted;
};

const addMemberProject = async (id: string, userId: string) => {
  const projectUpdated = await ProjectModel.updateOne(
    { _id: id },
    { $push: { member: userId } }
  );
  return projectUpdated;
};

export {
  getAllProjects,
  getProjectById,
  createNewProject,
  deleteProjectCtrl,
  addMemberProject,
};
