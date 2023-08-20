import { Router } from "express";
import { loginUserHandler, postUserHandler, updateUser } from "../handlers/users/usersHandler";

const router = Router()

router.post('/login', loginUserHandler)
router.post('/register', postUserHandler)
router.put('/:projectId', updateUser)

export {router}