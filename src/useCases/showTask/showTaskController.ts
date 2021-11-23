import { Request, Response } from "express";
import { IShowTaskController } from "./showTaskInterface";
import { ShowTaskService } from "./showTaskService";

class ShowTaskController implements IShowTaskController{
 constructor(){}
 
 async handle(request:Request, response:Response){
   const service = new ShowTaskService()
  try {
    const foundedTask = await service.execute(request.params.id);
    return response.status(200).json(foundedTask);
  } catch (error) {
    return response.status(500).json(error);
  }
 }
}

export { ShowTaskController}