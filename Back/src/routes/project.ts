import { Router } from "express";
import {
  deleteProject,
  deleteUser,
  getProject,
  getProjects,
  postProject,
  putProject,
  getProjectRecently
} from "../handlers/projects/projectsHandler";
import verifyTokenInvitation from "../utils/verifyTokenInvitation";

const router = Router();

router.get('/recently', getProjectRecently)
router.get("/projects/:id", getProjects);
router.get("/:id", getProject);
router.post("/", postProject);
router.delete("/:id", deleteProject);
router.put('/:id', verifyTokenInvitation, putProject)
router.put('/deleteUser/:id', deleteUser)

export {router}
