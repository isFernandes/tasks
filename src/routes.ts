//main imports
const express = require('express');
import TaskController from './controllers/TaskController';

const routes = express.Router();

const taskController = new TaskController();


routes.get('/getAll', taskController.index);
routes.post('/createTask', taskController.create);

routes.put('/updateTask/:_id', taskController.updateTask);
routes.put('/doneTask/:_id', taskController.updateDone);
routes.put('/checkAll', taskController.checkAll);
routes.put('/uncheckAll', taskController.uncheckAll);

routes.delete('/deleteTask/:id', taskController.delete);

module.exports = routes;