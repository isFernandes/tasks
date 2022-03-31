import { Router } from "express";
import { TasksController } from "../controllers/TasksController";

const tasksRouter = Router();

const PREFIX = "/api/task";

const taskController = new TasksController();

tasksRouter.post(`${PREFIX}/:userId`, taskController.create);
tasksRouter.get(`${PREFIX}/:userId`, taskController.getAll);

tasksRouter.put(`${PREFIX}/:userId`, taskController.update);
tasksRouter.get(`${PREFIX}/:userId/:id`, taskController.getById);
tasksRouter.delete(`${PREFIX}/:userId/:id`, taskController.delete);

tasksRouter.put(`${PREFIX}/:userId/all/change`, taskController.changeAll);

export { tasksRouter };
