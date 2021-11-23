import { Request, Response } from "express";
import { IUpdateData, IUpdateTaskController } from "./updateTaskInterface";
import { UpdateTaskService } from "./updateTaskService";

class UpdateTaskController implements IUpdateTaskController{
 service = new UpdateTaskService()

 async handle(request:Request, response:Response){
  const data: IUpdateData = {};
  data.description = validateField(request.body.description)
  data.done = validateField(request.body.done)
  try {
    const updatedTask = await this.service.execute(request.params.id, data);
    return response.json(updatedTask);
  } catch (error) {
    return response.status(200).json(error);
  }
 }
}

function validateField(enterValue: any){
  if(enterValue !== null && enterValue !== undefined && enterValue!== '' && enterValue !== ' '){
    return enterValue
  } 
}

export { UpdateTaskController}