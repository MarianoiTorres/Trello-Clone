import { Router } from "express";
import { getTask, getTasks, postTask, putTask } from "../handlers/tasks/tasksHandler";

const router = Router();

router.post('/', postTask)
router.get('/:projectId', getTasks)
router.get('/detail/:id', getTask)
router.put('/:id', putTask)


export { router };
