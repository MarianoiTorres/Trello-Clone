import { Task } from "../../interfaces/task";
import TaskModel from "../../models/taskModel";

const createNewTask = async (body: Task) => {
  const newTask = await TaskModel.create(body);
  return newTask;
};

const getAllTasks = async (projectId: string) => {
  const allTasks = await TaskModel.find({ projectId }).exec();
  return allTasks;
};

const getTaskById = async (id: string) => {
  const task = await TaskModel.findOne({ _id: id });
  return task;
};

const updateTask = async (id: string, body: Task) => {
  if (body.coments) {
    const comentsUpdated = await TaskModel.updateOne({_id: id},{$push: {coments: body.coments[0]}})
    return comentsUpdated
  } else {
    const taskUpdated = TaskModel.updateOne({ _id: id }, body);
    return taskUpdated;
  }
};

export { createNewTask, getAllTasks, getTaskById, updateTask };
