import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();
class AuthController {
  async signup(request: Request, response: Response) {
    try {
      await authService.singup(request.body);

      response.status(201).json({ message: "Usuario cadastrado com sucesso!" });
    } catch (err: any) {
      response.status(500).json({ error: err.message });
    }
  }

  async signin(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      const user = await authService.singin(email, password);

      response.status(200).json(user);
    } catch (err: any) {
      response.status(500).json({ error: err.message });
    }
  }
}

export { AuthController };
