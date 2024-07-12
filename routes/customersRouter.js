import express from "express";
import {
  getAllCustomers,
  getCustomerById,
} from "../controllers/customersControllers.js";

const customersRouter = express.Router();

customersRouter.get("/", getAllCustomers);
customersRouter.put("/:supplierId", getCustomerById);

export default customersRouter;
