import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { DetailsUserController } from "./controllers/DetailsUserController/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

export { router }