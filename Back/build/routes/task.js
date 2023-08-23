"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const tasksHandler_1 = require("../handlers/tasks/tasksHandler");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', tasksHandler_1.postTask);
router.get('/:projectId', tasksHandler_1.getTasks);
router.get('/detail/:id', tasksHandler_1.getTask);
router.put('/:id', tasksHandler_1.putTask);
router.delete('/:taskId', tasksHandler_1.deleteTaskHandler);
router.put('/removeMember/:taskId', tasksHandler_1.deleteMember);
//# sourceMappingURL=task.js.map