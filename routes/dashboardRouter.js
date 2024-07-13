import express from "express";
import dashboardControllers from "../controllers/dashboardControllers.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", dashboardControllers.getDashboardInfo);

export default dashboardRouter;
