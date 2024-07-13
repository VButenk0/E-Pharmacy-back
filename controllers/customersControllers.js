import {
  listCustomers,
  getOneCustomer,
} from "../services/customersServices.js";
import ctrWrapper from "../decorators/ctrWrapper.js";
import HttpError from "../helpers/HttpError.js";

const getAllCustomers = async (_, res) => {
  const result = await listCustomers();
  res.json(result);
};

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  const result = await getOneCustomer(id);
  if (!result) {
    throw HttpError(404, `Customer with id=${id} not found`);
  }
  res.json(result);
};

export default {
  getAllCustomers: ctrWrapper(getAllCustomers),
  getCustomerById: ctrWrapper(getCustomerById),
};
