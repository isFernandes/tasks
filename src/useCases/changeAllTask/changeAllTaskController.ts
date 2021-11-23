import { Request, Response } from "express";
import { ListTaskService } from "../listTask/listTaskService";
import { IChangeAllTaskController } from "./changeAllTaskInterface";
import { ChangeAllTaskService } from "./changeAllTaskService";

class ChangeAllTaskController implements IChangeAllTaskController{
  constructor(){}
  
  async handle(request:Request, response:Response){
   const service = new ChangeAllTaskService()
   const listService = new ListTaskService()
  try {
    await service.execute(request.body.done);
    const allTasks = await listService.execute()
    return response.status(200).json(allTasks);
  } catch (error) {
    return response.status(500).json(error);
  }
 }
}

export { ChangeAllTaskController}