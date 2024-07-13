import express from "express";
import ordersControllers from "../controllers/ordersControllers.js";

const ordersRouter = express.Router();

ordersRouter.get("/", ordersControllers.getAllOrders);

export default ordersRouter;
