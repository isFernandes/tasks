import { Router } from "express";
import { UpdateTaskController } from "./updateTaskController";

const updateTaskRouter = Router()

const PREFIX = "/api/task";


updateTaskRouter.put(`${PREFIX}/:id`, new UpdateTaskController().handle);

export = updateTaskRouter