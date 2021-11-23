import createTaskRouter from "../useCases/createTask/createTaskRoute";
import listTaskRouter from "../useCases/listTask/listTaskRoute";


const router = [createTaskRouter, listTaskRouter]

export = router