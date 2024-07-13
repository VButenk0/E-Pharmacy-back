import express from "express";
import customersControllers from "../controllers/customersControllers.js";
import { isValidId } from "../middlewares/isValidId.js";

const customersRouter = express.Router();

customersRouter.get("/", customersControllers.getAllCustomers);
customersRouter.get("/:id", isValidId, customersControllers.getCustomerById);

export default customersRouter;
