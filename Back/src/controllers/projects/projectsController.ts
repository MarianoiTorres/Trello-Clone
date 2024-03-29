import { Project } from "../../interfaces/project";
import ProjectModel from "../../models/projectModel";
import QueryString from "qs";
import UserModel from "../../models/usersModel";
import TaskModel from "../../models/taskModel";
import jwt from "jsonwebtoken";
import ListModel from "../../models/listOfTaskModel";

const getAllProjects = async (userId: string) => {
  const allProjects = await ProjectModel.find({
    member: { $in: [userId] }, // in = que dentro del array de member este userId
  }).exec(); //exec convierte la consulta en un arra
  return allProjects;
};

const getProjectById = async (id: string) => {
  const project = await ProjectModel.findOne({ _id: id })
    .populate({ path: "userCreator", model: UserModel })
    .populate({ path: "member", model: UserModel });
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
    const tasksDeleted = await TaskModel.deleteMany({ projectId: id });
    const listDeleted = await ListModel.deleteMany({projectId: id})
    const userRemoveProjectRecentlyView = await UserModel.updateMany(
      {},
      {$pull: {projectsRecentlyView: id}}
      )
    return projectDeleted;
  } else {
    return { message: "solo el creador del proyecto puede eliminarlo" };
  }
};

const addMemberProject = async (id: string, userId: string, token: any) => {
  if (userId) {
    const projectUpdated = await ProjectModel.updateOne(
      { _id: id},
      {$push: {member: userId}},
      { new: true }
    );
    return projectUpdated
  } else {
    const tokenDecoded = jwt.decode(token) as { userInvited?: string };

    const user = await UserModel.findOne({ email: tokenDecoded!.userInvited });
    const projectUpdated = await ProjectModel.updateOne(
      { _id: id },
      { $push: { member: user!._id } },
      { new: true }
    );
    return projectUpdated;
  }
};

const deleteUserOfProject = async (id: string, userId: string) => {
  const userDeleted = await ProjectModel.updateOne(
    { _id: id },
    { $pull: { member: userId } }
  );
  return userDeleted;
};

const projectsRecently = async (
  projects:
    | string
    | string[]
    | QueryString.ParsedQs
    | QueryString.ParsedQs[]
    | undefined
) => {
  const projectsRecent = await ProjectModel.find({
    _id: projects,
  }).exec();
  return projectsRecent;
};

const getProjectController = async (
  name:
    | string
    | string[]
    | QueryString.ParsedQs
    | QueryString.ParsedQs[]
    | undefined
) => {
  const project = await ProjectModel.find({ name: name });
  return project;
};

const changeBackground = async (id: string, body: any) => {
  const updatedBackground = await ProjectModel.updateOne(
    { _id: id },
    { background: body.background }
  );
  return updatedBackground;
};

export {
  getAllProjects,
  getProjectById,
  createNewProject,
  deleteProjectCtrl,
  addMemberProject,
  deleteUserOfProject,
  projectsRecently,
  getProjectController,
  changeBackground,
};
