import {
  addProduct,
  listProducts,
  removeProduct,
  updateProduct,
} from "../services/productsServices.js";
import ctrWrapper from "../decorators/ctrWrapper.js";

const getAllProducts = async (_, res) => {
  const result = await listProducts();
  res.json(result);
};

const addNewProduct = async (req, res) => {
  const result = await addProduct({
    ...req.body,
  });
  res.status(201).json(result);
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const result = await updateProduct(id, req.body);
  res.json(result);
};

const deleteProduct = async (req, res) => {
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
