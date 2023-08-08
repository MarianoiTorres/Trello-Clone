import { Router } from "express";
import { deleteComent, getComents, postComent, putComent } from "../handlers/coments/comentsHandler";

const router = Router()

router.get('/:userId', getComents)
router.post('/', postComent)
router.put('/:id', putComent)
router.delete('/:id', deleteComent)

export {router}