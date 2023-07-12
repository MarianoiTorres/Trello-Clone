import { Task } from "../../interfaces/task"
import TaskModel from "../../models/taskModel"

const createNewTask = async (body: Task) => {
    const newTask = await TaskModel.create(body)
    return newTask
}

const getAllTasks = async(projectId: string) => {
    const allTasks = await TaskModel.find({projectId}).exec()
    return allTasks
}

export {
    createNewTask,
    getAllTasks
}