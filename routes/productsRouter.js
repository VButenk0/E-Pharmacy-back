import express from "express";
import productsControllers from "../controllers/productsControllers.js";
import validateBody from "../helpers/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/productsSchemas.js";

const productsRouter = express.Router();

productsRouter.get("/", productsControllers.getAllProducts);
productsRouter.post(
  "/",
  validateBody(createProductSchema),
  productsControllers.addNewProduct
);
productsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateProductSchema),
  productsControllers.editProduct
);
productsRouter.delete("/:id", isValidId, productsControllers.deleteProduct);

export default productsRouter;
