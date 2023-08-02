import { Router } from "express";
import { generateLink, getPayload, sendMailWithLink } from "../handlers/invitation/invitationHandler";
import verifyTokenInvitation from "../utils/verifyTokenInvitation";

const router = Router();

router.post("/", generateLink);
router.post('/mail', sendMailWithLink)
router.post('/decode', verifyTokenInvitation, getPayload)

export { router };
