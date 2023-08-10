import { Router } from "express";
import { getTask, getTasks, postTask, putTask, deleteTaskHandler } from "../handlers/tasks/tasksHandler";

const router = Router();

router.post('/', postTask)
router.get('/:projectId', getTasks)
router.get('/detail/:id', getTask)
router.put('/:id', putTask)
router.delete('/:taskId', deleteTaskHandler)


export { router };
