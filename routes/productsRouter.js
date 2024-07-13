import express from "express";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
} from "../controllers/productsControllers.js";

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.post("/", addNewProduct);
productsRouter.put("/:productId", editProduct);
productsRouter.delete("/:productId", deleteProduct);

export default productsRouter;
