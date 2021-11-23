//main imports
import express from 'express';
import TaskController from '../controllers/TaskController';

const taskRouter = express.Router();

const taskController = new TaskController();


// taskRouter.get('/getAll', taskController.index);

taskRouter.put('/updateTask/:_id', taskController.updateTask);
taskRouter.put('/doneTask/:_id', taskController.updateDone);
taskRouter.put('/checkAll', taskController.checkAll);
taskRouter.put('/uncheckAll', taskController.uncheckAll);

taskRouter.delete('/deleteTask/:id', taskController.delete);

export  = taskRouter;