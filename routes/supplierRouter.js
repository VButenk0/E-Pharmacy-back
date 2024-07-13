import express from "express";
import {
  addNewSupplier,
  editSupplier,
  getAllSuppliers,
} from "../controllers/suppliersControllers.js";

const suppliersRouter = express.Router();

suppliersRouter.get("/", getAllSuppliers);
suppliersRouter.post("/", addNewSupplier);
suppliersRouter.put("/:supplierId", editSupplier);

export default suppliersRouter;
