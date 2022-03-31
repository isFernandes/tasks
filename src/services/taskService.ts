import { ITaskService } from "../entities/services";
import { ITask } from "../entities/UserModel";
import { UserService } from "./userService";

const userService = new UserService();
class TaskService implements ITaskService {
  async create(userId: string, payload: any) {
    const foundUser = await userService.getById(userId);

    if (!!payload.description) {
      foundUser.tasks = [...foundUser.tasks, payload];
    }

    return await userService.update(userId, foundUser);
  }

  async getAll(userId: string) {
    const foundUser = await userService.getById(userId);
    return foundUser.tasks;
  }

  async update(userId: string, payload: any) {
    let foundUser = await userService.getById(userId);
    let updatedTask;

    const updatedTasks = foundUser.tasks?.map((item: ITask) => {
      if (item._id?.toString() === payload?._id) {
        if (payload.done !== item.done && payload.done !== null) {
          item.done = payload.done;
        }

        if (!!payload.description && payload.description !== item.description) {
          item.description = payload.description;
        }
        updatedTask = item;
        return item;
      }

      return item;
    });

    foundUser = { ...foundUser, tasks: updatedTasks };
    await userService.update(userId, foundUser);
    return updatedTask;
  }

  async delete(userId: string, id: string) {
    const foundUser = await userService.getById(userId);
    let tasks = foundUser.tasks?.filter(
      (item: ITask) => item._id?.toString() !== id
    );

    foundUser.tasks = tasks;

    return await userService.update(userId, foundUser);
  }

  async getById(userId: string, id: string) {
    const foundUser = await userService.getById(userId);

    const task: ITask = foundUser.tasks?.find(
      (item: ITask) => item._id?.toString() === id
    );

    return task;
  }

  async changeAllTasks(userId: string, done: boolean): Promise<ITask[]> {
    const foundUser = await userService.getById(userId);

    const changedTasks = foundUser.tasks?.map((item: ITask) => {
      item.done = done;
      return item;
    });

    foundUser.tasks = changedTasks;

    return await userService.update(userId, foundUser);
  }
}

export { TaskService };
