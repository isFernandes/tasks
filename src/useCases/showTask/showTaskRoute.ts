import { Router } from "express";
import { ShowTaskController } from "./showTaskController";

const showTaskRouter = Router()

const PREFIX = "/api/task";


showTaskRouter.get(`${PREFIX}/:id`, new ShowTaskController().handle);

export = showTaskRouter