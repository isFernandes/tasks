import { Model } from "mongoose";
import { ITaskRepository } from "../entities/repositories";
import { ITask } from "../entities/TaskModel";
import { Repositories } from "./baseRepository";

class TaskRepository extends Repositories implements ITaskRepository {
  private model: any;
  constructor(schema: typeof Model) {
    super(schema);
    this.model = schema;
  }

  async changeAllTasks(done: boolean): Promise<ITask[]> {
    await this.model.updateMany({ done: !done }, { done });
    const res = await this.model.find();
    return res;
  }
}

export { TaskRepository };
