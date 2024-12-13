import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";

export const router = Router();

router.post("/users", new CreateUserController().handle)