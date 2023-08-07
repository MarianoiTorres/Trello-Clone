import { Request, Response } from "express";
import {
  addMemberProject,
  createNewProject,
  deleteProjectCtrl,
  deleteUserOfProject,
  getAllProjects,
  getProjectById,
  projectsRecently
} from "../../controllers/projects/projectsController";

const getProjects = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // id del usuario
    const projects = await getAllProjects(id);
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // id del proyecto
    const project = await getProjectById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const postProject = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newProject = await createNewProject(body);
    res.status(200).json(newProject);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {userId} = req.query;
    const projectDeleted = await deleteProjectCtrl(id, userId);
    res.status(200).json(projectDeleted);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const putProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
  
    const projectUpdated = await addMemberProject(id, userId);
    res.status(200).json(projectUpdated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const userDeleted = await deleteUserOfProject(id, userId)
    res.status(200).json(userDeleted)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
};

const getProjectRecently = async(req:Request, res: Response) => {
  console.log('hola');
  try {
    const projectsId = req.query.id
    
    const projects = await projectsRecently(projectsId)
    res.status(200).json(projects)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
}

export {
  getProjects,
  getProject,
  postProject,
  deleteProject,
  putProject,
  deleteUser,
  getProjectRecently
};
