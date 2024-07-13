import { Customer } from "../models/Customer";
import { IncomeExpense } from "../models/IncomeExpense";
import { Product } from "../models/Product";
import { Supplier } from "../models/Supplier";

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
