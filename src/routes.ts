import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { DetailsUserController } from "./controllers/DetailsUserController/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated/isAuthenticated";
import { CreateCategoryController } from "./controllers/CreateCategoryController/CreateCategoryController";

const router = Router();

//? Users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

//? Category
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
export { router }