import { Router } from "express";

import multer from "multer";

import { CreateUserController } from "./controllers/UserController/CreateUserController";
import { AuthUserController } from "./controllers/UserController/AuthUserController";
import { DetailsUserController } from "./controllers/UserController/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated/isAuthenticated";
import { CreateCategoryController } from "./controllers/CreateCategoryController/CreateCategoryController";
import { ListCategoryController } from "./controllers/CreateCategoryController/ListCategoryController";
import { CreateProductController } from "./controllers/ProductController/CreateProductController";

import uploadConfig from "./config/multer";
import { FilterByCategoryController } from "./controllers/ProductController/FilterByCategoryController";

const router = Router();

const upload = multer(uploadConfig.upload("../tmp"));

// Users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

// Category
router.post("/category", isAuthenticated, new CreateCategoryController().handle);
router.get("/category", isAuthenticated, new ListCategoryController().handle);

// Product
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.get("/category/product", isAuthenticated, new FilterByCategoryController().handle);

export { router }