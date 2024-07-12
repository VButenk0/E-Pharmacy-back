import { getOrders } from "../services/ordersServices";
import ctrWrapper from "../decorators/ctrWrapper.js";

export const getAllOrders = async (_, res) => {
  const result = await getOrders();
  res.json(result);
};

export default {
  getDashboardInfo: ctrWrapper(getDashboardInfo),
};
