import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const PREFIX = "/api/user";

const userController = new UserController();

// userRouter.post(`${PREFIX}/`, userController.create);
userRouter.get(`${PREFIX}/`, userController.getAll);

userRouter.put(`${PREFIX}/:id`, userController.update);
userRouter.get(`${PREFIX}/:id`, userController.getById);
userRouter.delete(`${PREFIX}/:id`, userController.delete);

export { userRouter };
