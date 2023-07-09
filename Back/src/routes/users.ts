import { Router } from "express";
import { postUserHandler } from "../handlers/usersHandler";

const router = Router()

router.post('/', postUserHandler)

export {router}