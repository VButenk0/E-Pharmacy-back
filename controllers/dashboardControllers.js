import ctrWrapper from "../decorators/ctrWrapper.js";
import { listProducts } from "../services/productsServices.js";
import { listSuppliers } from "../services/suppliersServices.js";
import { listCustomers } from "../services/customersServices.js";
import { getIncomeExpenses } from "../services/dashboardServices.js";

const getDashboardInfo = async (_, res) => {
  const products = await listProducts();
  const suppliers = await listSuppliers();
  const customers = await listCustomers();
  const incomeExpenses = await getIncomeExpenses();
  const result = {
    statistics: {
      allProducts: products.length,
      allSuppliers: suppliers.length,
      allCustomers: customers.length,
    },
    recentCustomers: customers
      .sort((a, b) => a.register_date - b.register_date)
      .slice(0, 5),
    incomeExpenses: incomeExpenses.slice(0, 6),
  };
  res.json(result);
};

export default {
  getDashboardInfo: ctrWrapper(getDashboardInfo),
};
