import { Schema } from "mongoose";
import TaskModel from "../../entities/Task/TaskModel";
import { IDeleteTask } from "../../repositories/deleteTaskRepository";

class DeleteTaskService implements IDeleteTask {
  async execute(id: Schema.Types.ObjectId | string){
    return await TaskModel.findByIdAndDelete({_id: id});
  }
}

export {DeleteTaskService}