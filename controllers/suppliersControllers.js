import {
  listSuppliers,
  addSupplier,
  updateSupplier,
} from "../services/suppliersServices.js";
import ctrWrapper from "../decorators/ctrWrapper.js";

const getAllSuppliers = async (_, res) => {
  const result = await listSuppliers();
  res.json(result);
};
const addNewSupplier = async (req, res) => {
  const result = await addSupplier({
    ...req.body,
  });
  res.status(201).json(result);
};
const editSupplier = async (req, res) => {
  const { id } = req.params;
  const result = await updateSupplier(id, req.body);
  res.json(result);
};

export default {
  getAllSuppliers: ctrWrapper(getAllSuppliers),
  addNewSupplier: ctrWrapper(addNewSupplier),
  editSupplier: ctrWrapper(editSupplier),
};
