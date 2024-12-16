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
import { FilterProductsByCategoryController } from "./controllers/ProductController/FilterProductsByCategoryController";
import { CreateOrderController } from "./controllers/OrderController/CreateOrderController";
import { RemoveOrderController } from "./controllers/OrderController/RemoveOrderController";
import { AddItemController } from "./controllers/OrderController/AddItemController";
FilterProductsByCategoryController

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
router.get("/category/product", isAuthenticated, new FilterProductsByCategoryController().handle);

// Order
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", isAuthenticated, new AddItemController().handle);

export { router }