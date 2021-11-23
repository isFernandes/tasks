import { Request, Response } from "express";
import { IChangeAllTaskController } from "./changeAllTaskInterface";
import { ChangeAllTaskService } from "./changeAllTaskService";

class ChangeAllTaskController implements IChangeAllTaskController{

 service = new ChangeAllTaskService()

 async handle(request:Request, response:Response){
  try {
    const ChangeAlldTask = await this.service.execute(request.body.done);
    return response.json(ChangeAlldTask);
  } catch (error) {
    return response.status(200).json(error);
  }
 }
}

export { ChangeAllTaskController}