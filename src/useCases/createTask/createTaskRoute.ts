import { Router } from "express";
import { CreateTaskController } from "./createTaskController";

const createTaskRouter = Router()

const PREFIX = "/api/task";


createTaskRouter.post(`${PREFIX}/`, new CreateTaskController().handle);

export = createTaskRouter