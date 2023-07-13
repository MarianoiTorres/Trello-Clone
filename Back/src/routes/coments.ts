import { Router } from "express";
import { deleteComent, postComent, putComent } from "../handlers/coments/comentsHandler";

const router = Router()

router.post('/', postComent)
router.put('/:id', putComent)
router.delete('/:id', deleteComent)

export {router}