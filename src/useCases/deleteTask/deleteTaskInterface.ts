import { Request, Response } from "express";
import { Schema } from "mongoose";
import { ITask } from "../../Entities/Task/ITask";
import { DeleteTaskService } from "./deleteTaskService";

export interface IDeleteTask {
  execute(id: Schema.Types.ObjectId | string): Promise<ITask | null> 
}

export interface IDeleteTaskController {
  service: DeleteTaskService;
  handle(request:Request, response:Response): Promise<any>
}