import express from "express";
import { login, logout, getUserInfo } from "../controllers/userControllers.js";
import validateBody from "../helpers/validateBody.js";
import { loginSchema } from "../schemas/userSchemas.js";
import { authenticate } from "../middlewares/authenticate.js";

const userRouter = express.Router();

userRouter.get("/login", validateBody(loginSchema), login);
userRouter.get("/logout", authenticate, logout);
userRouter.get("/user-info", authenticate, getUserInfo);

export default userRouter;
