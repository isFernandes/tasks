import { Router } from "express";
import { TasksController } from "../controllers/TasksController";

const tasksRouter = Router();

const PREFIX = "/api/task";

const taskController = new TasksController();

tasksRouter.post(`${PREFIX}/`, taskController.create);
tasksRouter.get(`${PREFIX}/`, taskController.getAll);

tasksRouter.put(`${PREFIX}/:id`, taskController.update);
tasksRouter.get(`${PREFIX}/:id`, taskController.getById);
tasksRouter.delete(`${PREFIX}/:id`, taskController.delete);

tasksRouter.put(`${PREFIX}/all/change`, taskController.changeAll);

export { tasksRouter };
