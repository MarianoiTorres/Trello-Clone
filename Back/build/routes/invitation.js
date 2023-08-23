"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const invitationHandler_1 = require("../handlers/invitation/invitationHandler");
const verifyTokenInvitation_1 = __importDefault(require("../utils/verifyTokenInvitation"));
const router = (0, express_1.Router)();
exports.router = router;
router.post("/", invitationHandler_1.generateLink);
router.post('/mail', invitationHandler_1.sendMailWithLink);
router.post('/decode', verifyTokenInvitation_1.default, invitationHandler_1.getPayload);
//# sourceMappingURL=invitation.js.map