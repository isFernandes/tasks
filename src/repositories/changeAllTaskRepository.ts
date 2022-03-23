import { Request, Response } from "express";
import { ITask } from "../entities/Task/ITask";

export interface IChangeAllTask {
  execute(done:boolean): Promise<ITask[]> 
}

export interface IChangeAllTaskController {
  handle(request:Request, response:Response): Promise<any>
}