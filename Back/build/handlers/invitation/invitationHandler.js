"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailWithLink = exports.getPayload = exports.generateLink = void 0;
const invitationController_1 = require("../../controllers/invitation/invitationController");
const generateLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const sentMail = yield (0, invitationController_1.generateLinkController)(body);
        res.status(200).json(sentMail);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.generateLink = generateLink;
const sendMailWithLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const sentMail = yield (0, invitationController_1.sendMailController)(body);
        res.status(200).json(sentMail);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.sendMailWithLink = sendMailWithLink;
const getPayload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const payload = yield (0, invitationController_1.decodedController)(body.token);
        res.status(200).json(payload);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getPayload = getPayload;
//# sourceMappingURL=invitationHandler.js.map