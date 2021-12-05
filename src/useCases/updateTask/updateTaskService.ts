import { Schema } from "mongoose";
import TaskModel from "../../entities/Task/TaskModel";
import { IUpdateDTO, IUpdateTask } from "../../repositories/updateTaskRepository";

class UpdateTaskService implements IUpdateTask {
  async execute(id:Schema.Types.ObjectId | string, updateData : IUpdateDTO){
    await TaskModel.updateOne({_id: id}, updateData);
    return await TaskModel.findById({_id: id});
  }
}

export {UpdateTaskService}