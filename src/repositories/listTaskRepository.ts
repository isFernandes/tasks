import { Request, Response } from "express";
import { ITask } from "../entities/Task/ITask";

export interface IListTask {
  execute(): Promise<ITask[] | null> 
}

export interface IListTaskController {
  handle(request:Request, response:Response): Promise<any>
}