import { Request, Response } from "express";
import { IListTaskController } from "./listTaskInterface";
import { ListTaskService } from "./listTaskService";

class ListTaskController implements IListTaskController{
 constructor(){}
 
 async handle(request:Request, response:Response){
   const service = new ListTaskService()
  try {
    const allTasks = await service.execute();
    return response.status(200).json(allTasks);
  } catch (error) {
    return response.status(500).json(error);
  }
 }
}

export { ListTaskController}