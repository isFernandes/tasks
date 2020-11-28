//main imports
const express = require('express');
import TaskController from './controllers/TaskController';

const routes = express.Router();

const taskController = new TaskController();


routes.get('/getAll', taskController.index);
routes.post('/createTask', taskController.create);
routes.put('/:_id', taskController.update);
routes.delete('/:id', taskController.delete);

module.exports = routes;