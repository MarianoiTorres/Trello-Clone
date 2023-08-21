import { Router } from "express";
import {
  deleteProject,
  deleteUser,
  getProject,
  getProjects,
  postProject,
  putProject,
  getProjectRecently,
  getProjectByName,
  updateBackground,
} from "../handlers/projects/projectsHandler";
import verifyTokenInvitation from "../utils/verifyTokenInvitation";

const router = Router();

router.get("/projects/:id", getProjects);
router.put('/background/:id', updateBackground)
router.get('/recently', getProjectRecently)
router.get('/', getProjectByName)
router.get("/:id", getProject);
router.post("/", postProject);
router.delete("/:id", deleteProject);
router.put('/:id', verifyTokenInvitation, putProject)
router.put('/deleteUser/:id', deleteUser)

export {router}
