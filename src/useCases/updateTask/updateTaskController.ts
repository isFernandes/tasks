import { Request, Response } from "express";
import { ITask } from "../../Entities/Task/ITask";
import { ShowTaskService } from "../showTask/showTaskService";
import { IUpdateData, IUpdateTaskController } from "./updateTaskInterface";
import { UpdateTaskService } from "./updateTaskService";

class UpdateTaskController implements IUpdateTaskController{
  constructor(){}
  
  async handle(request:Request, response:Response){
  const service = new UpdateTaskService()
  const showService = new ShowTaskService()
  const data: IUpdateData = {};
  
  try {
    const foundedTask: any = await showService.execute(request.params.id);
    if(!foundedTask){
      return response.status(400).json({error: "Tarefa nâo encontrada!"})
    }
    console.log(foundedTask)
    data.description = validateField(request.body.description, foundedTask.description)
    data.done = validateField(request.body.done, foundedTask.done)
    const updatedTask = await service.execute(foundedTask._id, data);
    return response.status(200).json(updatedTask);
  } catch (error:any) {
    return response.status(500).json({error: error.message});
  }
 }
}

function validateField(enterValue: any, compareValue:any){
  if(enterValue !== compareValue && enterValue !== null && enterValue !== undefined && enterValue!== '' && enterValue !== ' '){
    return enterValue
  }
  return compareValue
}

export { UpdateTaskController}