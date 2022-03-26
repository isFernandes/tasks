import { verifyToken as authJwt } from "./authJwt";
import { checkDuplicateUsernameOrEmail as verifySignUp } from "./verifySignup";

module.exports = {
  authJwt,
  verifySignUp,
};
