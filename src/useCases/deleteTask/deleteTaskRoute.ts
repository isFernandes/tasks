import { Router } from "express";
import { DeleteTaskController } from "./deleteTaskController";

const deleteTaskRouter = Router()

const PREFIX = "/api/task";


deleteTaskRouter.delete(`${PREFIX}/:id`, new DeleteTaskController().handle);

export = deleteTaskRouter