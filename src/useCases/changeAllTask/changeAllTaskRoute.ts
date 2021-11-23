import { Router } from "express";
import { ChangeAllTaskController } from "./changeAllTaskController";

const changeAllTaskRouter = Router()

const PREFIX = "/api/task";


changeAllTaskRouter.put(`${PREFIX}/all/change`, new ChangeAllTaskController().handle);

export = changeAllTaskRouter