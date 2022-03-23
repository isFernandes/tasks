import TaskModel from "../../entities/Task/TaskModel";
import { ICreateTask } from "../../repositories/createTaskRepository";

class CreateTaskService implements ICreateTask {
  constructor(private readonly schema: typeof TaskModel) {}
  async execute(description: string, done: boolean = false) {
    return await this.schema.create({ description, done });
  }
}

export { CreateTaskService };
