import { ITaskService } from "../entities/services";
import { ITask, IUser } from "../entities/UserModel";
import { TaskRepository } from "../repositories/taskRepository";
import { Service } from "./service";
import { UserService } from "./userService";

// const repository = new TaskRepository();
const userService = new UserService();
class TaskService implements ITaskService {
  async create(userId: string, payload: any) {
    const foundUser = await userService.getById(userId);
    foundUser.tasks = [...foundUser.tasks, payload];

    return await userService.update(userId, foundUser);
  }

  async getAll(userId: string) {
    const foundUser = await userService.getById(userId);
    return foundUser.tasks;
  }

  async update(userId: string, payload: any) {
    const foundUser = await userService.getById(userId);
    let tasks = foundUser.tasks?.map((item: ITask) => {
      if (item._id === payload?._id) {
        return payload;
      }
      return item;
    });

    foundUser.tasks = [...foundUser.tasks, tasks];

    return await userService.update(userId, foundUser);
  }

  async delete(userId: string, id: string) {
    const foundUser = await userService.getById(userId);
    let tasks = foundUser.tasks?.filter((item: ITask) => item._id !== id);

    foundUser.tasks = tasks;

    return await userService.update(userId, foundUser);
  }

  async getById(userId: string, id: string) {
    const foundUser = await userService.getById(userId);
    let task = foundUser.tasks?.filter((item: ITask) => item._id === id);

    return task;
  }

  async changeAllTasks(userId: string, done: boolean): Promise<ITask[]> {
    const foundUser = await userService.getById(userId);
    let tasks = foundUser.tasks?.map((item: ITask) => {
      item.done = done;
      return item;
    });

    foundUser.tasks = [...foundUser.tasks, tasks];

    return await userService.update(userId, foundUser);
  }
}

export { TaskService };
