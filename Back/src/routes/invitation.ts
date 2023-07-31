import { Router } from "express";
import { getPayload, sendMailHandler } from "../handlers/invitation/invitationHandler";

const router = Router();

router.post("/", sendMailHandler);
router.post('/decode', getPayload)

export { router };
