import { Router } from "express";
import { sendMailHandler } from "../handlers/invitation/invitationHandler";

const router = Router();

router.post("/", sendMailHandler);

export { router };
