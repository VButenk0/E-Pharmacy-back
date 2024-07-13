import { Schema, model } from "mongoose";

const incomeExpenseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Income", "Expense", "Error"],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const IncomeExpense = model("incomeExpense", incomeExpenseSchema);
