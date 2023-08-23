"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const listsHandler_1 = require("../handlers/lists/listsHandler");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', listsHandler_1.postList);
router.get('/:projectId', listsHandler_1.getLists);
router.put('/:listId', listsHandler_1.putList);
router.delete('/:listId', listsHandler_1.deleteList);
//# sourceMappingURL=list.js.map