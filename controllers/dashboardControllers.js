import { getAllInfo } from "../services/dashboardServices";
import ctrWrapper from "../decorators/ctrWrapper.js";

const getDashboardInfo = async (_, res) => {
  const result = await getAllInfo();
  res.json(result);
};

export default {
  getDashboardInfo: ctrWrapper(getDashboardInfo),
};
