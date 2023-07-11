import { Router } from "express";
import {
  deleteProject,
  deleteUser,
  getProject,
  getProjects,
  postProject,
  putProject,
} from "../handlers/projects/projectsHandler";

const router = Router();

router.get("/projects/:id", getProjects);
router.get("/:id", getProject);
router.post("/", postProject);
router.delete("/:id", deleteProject);
router.put('/:id', putProject)
router.put('/deleteUser/:id', deleteUser)

export {router}
