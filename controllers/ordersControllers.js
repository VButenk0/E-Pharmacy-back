import { getOrders } from "../services/ordersServices.js";
import ctrWrapper from "../decorators/ctrWrapper.js";

const getAllOrders = async (_, res) => {
  const result = await getOrders();
  res.json(result);
};

export default {
  getAllOrders: ctrWrapper(getAllOrders),
};
