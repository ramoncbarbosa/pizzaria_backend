import { Request, Response } from "express";
import { AuthUserService } from "../../services/User/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.signin({
      email,
      password
    });

    return res.json(auth);
  }
}

export { AuthUserController }