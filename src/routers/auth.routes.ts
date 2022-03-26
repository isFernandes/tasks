import { checkDuplicateUsernameOrEmail } from "../middlewares/verifySignup";
import { AuthController } from "../controllers/AuthController";

import { signupValidator } from "../middlewares/validators/singupValidator";
import { signinValidator } from "../middlewares/validators/signinValidator";

const authRoutes = require("express").Router();
const authController = new AuthController();

const PREFIX = "/api/auth";

authRoutes.post(
  `${PREFIX}`,
  signupValidator, //validator
  checkDuplicateUsernameOrEmail, //middleware
  authController.signup
);

authRoutes.post(`${PREFIX}/login`, signinValidator, authController.signin);

export { authRoutes };
