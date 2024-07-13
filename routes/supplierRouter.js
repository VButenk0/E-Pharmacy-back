import express from "express";
import suppliersControllers from "../controllers/suppliersControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  createSupplierSchema,
  updateSupplierSchema,
} from "../schemas/suppliersSchemas.js";
import { isValidId } from "../middlewares/isValidId.js";

const suppliersRouter = express.Router();

suppliersRouter.get("/", suppliersControllers.getAllSuppliers);
suppliersRouter.post(
  "/",
  validateBody(createSupplierSchema),
  suppliersControllers.addNewSupplier
);
suppliersRouter.put(
  "/:id",
  isValidId,
  validateBody(updateSupplierSchema),
  suppliersControllers.editSupplier
);

export default suppliersRouter;
