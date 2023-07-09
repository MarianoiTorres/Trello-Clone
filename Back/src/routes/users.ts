import { Router } from "express";
import { loginUserHandler, postUserHandler } from "../handlers/usersHandler/usersHandler";

const router = Router()

router.post('/', postUserHandler)
router.post('/login', loginUserHandler)

export {router}