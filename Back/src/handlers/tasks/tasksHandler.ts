import { Request, Response } from "express";
import {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateStateTask,
  updateTask,
} from "../../controllers/tasks/tasksController";

const postTask = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newTask = await createNewTask(body);
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const tasks = await getAllTasks(projectId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);
    
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const putTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const taskUpdated = await updateTask(id, body)
    
    res.status(200).json(taskUpdated);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const putStateTask = async(req: Request, res: Response) => {
  try {
    const {listId} = req.params
    const {body} = req
    const updatedState = await updateStateTask(listId, body)
    res.status(200).json(updatedState)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}

export { postTask, getTasks, getTask, putTask, putStateTask };
