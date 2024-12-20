import { Router } from "express";

import multer from "multer";

import { CreateUserController } from "./controllers/UserController/CreateUserController";
import { AuthUserController } from "./controllers/UserController/AuthUserController";
import { DetailsUserController } from "./controllers/UserController/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated/isAuthenticated";
import { CreateCategoryController } from "./controllers/CategoryController/CreateCategoryController";
import { ListCategoryController } from "./controllers/CategoryController/ListCategoryController";
import { CreateProductController } from "./controllers/ProductController/CreateProductController";

import uploadConfig from "./config/multer";
import { FilterProductsByCategoryController } from "./controllers/ProductController/FilterProductsByCategoryController";
import { CreateOrderController } from "./controllers/OrderController/CreateOrderController";
import { RemoveOrderController } from "./controllers/OrderController/RemoveOrderController";
import { AddItemController } from "./controllers/OrderController/AddItemController";
import { RemoveItemController } from "./controllers/OrderController/RemoveItemController";
import { SendOrderController } from "./controllers/OrderController/SendOrderController";
import { ListOrderController } from "./controllers/OrderController/ListOrderController";
import { DetailsOrderController } from "./controllers/OrderController/DetailsOrderController";
import { CheckOrderController } from "./controllers/OrderController/CheckOrderController";

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
router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle);
router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get("/order/details", isAuthenticated, new DetailsOrderController().handle);
router.put("/order/check", isAuthenticated, new CheckOrderController().handle);

export { router }