"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const comentsHandler_1 = require("../handlers/coments/comentsHandler");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/:userId', comentsHandler_1.getComents);
router.post('/', comentsHandler_1.postComent);
router.put('/:id', comentsHandler_1.putComent);
router.delete('/:id', comentsHandler_1.deleteComent);
//# sourceMappingURL=coments.js.map