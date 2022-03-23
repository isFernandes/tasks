import TaskModel from "../../entities/Task/TaskModel";
import { IChangeAllTask } from "../../repositories/changeAllTaskRepository";

class ChangeAllTaskService implements IChangeAllTask {
  constructor(private readonly schema: typeof TaskModel) {}

  async execute(done: boolean) {
    await this.schema.updateMany({ done: !done }, { done });
    const res = await this.schema.find();
    return res;
  }
}

export { ChangeAllTaskService };
