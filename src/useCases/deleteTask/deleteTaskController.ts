import { Request, Response } from "express";
import { IDeleteTaskController } from "./deleteTaskInterface";
import { DeleteTaskService } from "./deleteTaskService";

class DeleteTaskController implements IDeleteTaskController{

 service = new DeleteTaskService()

 async handle(request:Request, response:Response){
  try {
    await this.service.execute(request.params.id);
    return response.status(204).json();
  } catch (error) {
    return response.status(500).json(error);
  }
 }
}

export { DeleteTaskController}