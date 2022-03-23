import { Schema } from "mongoose";
import TaskModel from "../../entities/Task/TaskModel";
import {
  IUpdateDTO,
  IUpdateTask,
} from "../../repositories/updateTaskRepository";

class UpdateTaskService implements IUpdateTask {
  constructor(private readonly schema: typeof TaskModel) {}
  async execute(id: Schema.Types.ObjectId | string, updateData: IUpdateDTO) {
    await this.schema.updateOne({ _id: id }, updateData);
    return await this.schema.findById({ _id: id });
  }
}

export { UpdateTaskService };
