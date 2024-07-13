import express from "express";
import { getDashboardInfo } from "../controllers/dashboardControllers.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", getDashboardInfo);

export default dashboardRouter;
