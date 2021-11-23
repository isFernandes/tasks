//main imports
import createTaskRouter from "../useCases/createTask/createTaskRoute";
import listTaskRouter from "../useCases/listTask/listTaskRoute";
import updateTaskRouter from "../useCases/updateTask/updateTaskRoute";
import changeAllTaskRouter from "../useCases/changeAllTask/changeAllTaskRoute";
import deleteTaskRouter from "../useCases/deleteTask/deleteTaskRoute";


// taskRouter.put('/updateTask/:_id', taskController.updateTask);
// taskRouter.put('/doneTask/:_id', taskController.updateDone);
// taskRouter.put('/checkAll', taskController.checkAll);
// taskRouter.put('/uncheckAll', taskController.uncheckAll);

// taskRouter.delete('/deleteTask/:id', taskController.delete);

export  = {createTaskRouter, listTaskRouter, updateTaskRouter, changeAllTaskRouter, deleteTaskRouter};