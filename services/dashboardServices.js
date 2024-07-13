import { Customer } from "../models/Customer.js";
import { IncomeExpense } from "../models/IncomeExpense.js";
import { Product } from "../models/Product.js";
import { Supplier } from "../models/Supplier.js";

export const getAllInfo = async () => {
  const products = Product.find();
  const suppliers = Supplier.find();
  const customers = Customer.find();
  const incomeExpenses = IncomeExpense.find();
  return {
    statistics: {
      allProducts: products.length(),
      allSuppliers: suppliers.length(),
      allCustomers: customers.length(),
    },
    recentCustomers: customers.slice(0, 5),
    incomeExpenses,
  };
};
