import { Router } from "express";
import { getLists, postList, putList } from "../handlers/lists/listsHandler";

const router = Router()

router.post('/', postList)
router.get('/:projectId', getLists)
router.put('/:listId', putList)

export {router}