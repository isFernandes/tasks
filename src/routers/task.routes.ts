//main imports
import createTaskRouter from "../useCases/createTask/createTaskRoute";
import listTaskRouter from "../useCases/listTask/listTaskRoute";
import updateTaskRouter from "../useCases/updateTask/updateTaskRoute";
import changeAllTaskRouter from "../useCases/changeAllTask/changeAllTaskRoute";
import deleteTaskRouter from "../useCases/deleteTask/deleteTaskRoute";
import showTaskRouter from "../useCases/showTask/showTaskRoute";

export  = {
  createTaskRouter,
  showTaskRouter,
  listTaskRouter,
  updateTaskRouter,
  changeAllTaskRouter,
  deleteTaskRouter
};