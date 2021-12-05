import { Request, Response } from "express";
import { Schema } from "mongoose";
import { ITask } from "../entities/Task/ITask";

export interface IShowTask {
  execute(id: Schema.Types.ObjectId | string): Promise<ITask | null> 
}

export interface IShowTaskController {
  handle(request:Request, response:Response): Promise<any>
}