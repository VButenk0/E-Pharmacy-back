import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const supplierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      min: 1,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

supplierSchema.post("save", handleSaveError);
supplierSchema.pre("findOneAndUpdate", setUpdateSetting);
supplierSchema.post("findOneAndUpdate", handleSaveError);

export const Supplier = model("supplier", supplierSchema);
