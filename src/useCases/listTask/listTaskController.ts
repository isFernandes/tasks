import { Request, Response } from "express";
import { IListTaskController } from "./listTaskInterface";
import { ListTaskService } from "./listTaskService";

class ListTaskController implements IListTaskController{

 service = new ListTaskService()

 async handle(request:Request, response:Response){
  try {
    const allTasks = await this.service.execute();
    return response.json(allTasks);
  } catch (error) {
    return response.status(200).json(error);
  }
 }
}

export { ListTaskController}