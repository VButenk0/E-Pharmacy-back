import { IncomeExpense } from "../models/IncomeExpense.js";

export const getIncomeExpenses = async () => IncomeExpense.find();
