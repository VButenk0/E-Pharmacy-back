import express from "express";
import { getOrders } from "../controllers/ordersControllers.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);

export default ordersRouter;
