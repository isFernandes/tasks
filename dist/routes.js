"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
//main imports
const express = require('express');
const TaskController_1 = __importDefault(require("./controllers/TaskController"));
const routes = express.Router();
const taskController = new TaskController_1.default();
routes.get('/getAll', taskController.index);
routes.post('/createTask', taskController.create);
routes.put('/updateTask/:_id', taskController.updateTask);
routes.put('/doneTask/:_id', taskController.updateDone);
routes.put('/checkAll', taskController.checkAll);
routes.put('/uncheckAll', taskController.uncheckAll);
routes.delete('/deleteTask/:id', taskController.delete);
module.exports = routes;
//# sourceMappingURL=routes.js.map