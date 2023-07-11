import { Request, Response } from "express";
import {
    addMemberProject,
  createNewProject,
  deleteProjectCtrl,
  getAllProjects,
  getProjectById,
} from "../../controllers/projects/projectsController";

const getProjects = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const projects = getAllProjects(id);
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = getProjectById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const postProject = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newProject = createNewProject(body);
    res.status(200).json(newProject);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const projectDeleted = deleteProjectCtrl(id);
    res.status(200).json(projectDeleted);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const putProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const projectUpdated = await addMemberProject(id)
    res.status(200).json(projectUpdated)
  } catch (error) {}
};

export { getProjects, getProject, postProject, deleteProject, putProject };
