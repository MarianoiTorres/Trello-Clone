import { Request, Response } from "express";
import { createNewTask, getAllTasks } from "../../controllers/tasks/tasksController";

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
    const tasks = await getAllTasks(projectId)
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error });
  }
};

const putTask = async (req: Request, res: Response) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error });
  }
};

export { postTask, getTasks, getTask, putTask };
