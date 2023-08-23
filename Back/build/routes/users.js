"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usersHandler_1 = require("../handlers/users/usersHandler");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', usersHandler_1.loginUserHandler);
router.post('/register', usersHandler_1.postUserHandler);
router.put('/:projectId', usersHandler_1.updateUser);
//# sourceMappingURL=users.js.map