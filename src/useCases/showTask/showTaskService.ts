import { Schema } from "mongoose";
import TaskModel from "../../Entities/Task/TaskModel";
import { IShowTask } from "./showTaskInterface";

class ShowTaskService implements IShowTask {
  async execute(id: Schema.Types.ObjectId | string){
    console.log(id)
    return await TaskModel.findById({_id: id});
  }
}

export {ShowTaskService}