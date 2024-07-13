import { addProduct, listProducts } from "../services/productsServices";
import ctrWrapper from "../decorators/ctrWrapper.js";

export const getAllProducts = async (req, res) => {
  const result = await listProducts();
  res.json(result);
};

export const addNewProduct = async (req, res) => {
  const result = await addProduct({
    ...req.body,
  });
  res.status(201).json(result);
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const result = await updateProduct(id, req.body);
  res.json(result);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  removeProduct(id);
  res.status(204).send();
};

export default {
  getAllProducts: ctrWrapper(getAllProducts),
  addNewProduct: ctrWrapper(addNewProduct),
  editProduct: ctrWrapper(editProduct),
  deleteProduct: ctrWrapper(deleteProduct),
};
