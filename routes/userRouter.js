import express from "express";
import validateBody from "../helpers/validateBody.js";
import userControllers from "../controllers/userControllers.js";
import { loginSchema } from "../schemas/userSchemas.js";
import { authenticate } from "../middlewares/authenticate.js";

const userRouter = express.Router();

userRouter.post("/login", validateBody(loginSchema), userControllers.login);
userRouter.post("/logout", authenticate, userControllers.logout);
userRouter.get("/user-info", authenticate, userControllers.getUserInfo);

export default userRouter;
