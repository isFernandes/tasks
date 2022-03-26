import { Request, Response } from "express";

export interface ITasksController {
  changeAll(request: Request, response: Response): Promise<any>;
  getAll(request: Request, response: Response): Promise<any>;
  create(request: Request, response: Response): Promise<any>;
  update(request: Request, response: Response): Promise<any>;
  delete(request: Request, response: Response): Promise<any>;
  getById(request: Request, response: Response): Promise<any>;
}
