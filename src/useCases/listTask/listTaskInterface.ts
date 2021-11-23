import { Request, Response } from "express";
import { ITask } from "../../Entities/Task/ITask";
import { ListTaskService } from "./listTaskService";

export interface IListTask {
  execute(): Promise<ITask[] | null> 
}

export interface IListTaskController {
  service: ListTaskService;
  handle(request:Request, response:Response): Promise<any>
}