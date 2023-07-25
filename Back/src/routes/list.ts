import { Router } from "express";
import { getLists, postList, putList, deleteList } from "../handlers/lists/listsHandler";

const router = Router()

router.post('/', postList)
router.get('/:projectId', getLists)
router.put('/:listId', putList)
router.delete('/:listId', deleteList)

export {router}