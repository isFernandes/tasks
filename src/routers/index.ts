import { tasksRouter } from "./task.routes";
import { userRouter } from "./user.routes";
import { authRoutes } from "./auth.routes";

const routers = [authRoutes, tasksRouter, userRouter];

export { routers };
