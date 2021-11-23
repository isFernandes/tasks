import { Router } from "express";
import { ListTaskController } from "./listTaskController";

const listTaskRouter = Router()

const PREFIX = "/api/task";


listTaskRouter.get(`${PREFIX}/`, new ListTaskController().handle);

export = listTaskRouter