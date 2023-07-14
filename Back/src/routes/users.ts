import { Router } from "express";
import { loginUserHandler, postUserHandler } from "../handlers/users/usersHandler";

const router = Router()

router.post('/login', loginUserHandler)
router.post('/register', postUserHandler)

export {router}