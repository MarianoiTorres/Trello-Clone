import { Request, Response } from "express";
import {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../../controllers/tasks/tasksController";

const postTask = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const newTask = await createNewTask(body);
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const tasks = await getAllTasks(projectId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const putTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const taskUpdated = await updateTask(id, body)
    res.status(200).json(taskUpdated);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { postTask, getTasks, getTask, putTask };
