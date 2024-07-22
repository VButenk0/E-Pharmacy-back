import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const productSchema = new Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Medicine",
        "Heart",
        "Head",
        "Hand",
        "Leg",
        "Skin Care",
        "Dental Care",
      ],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

productSchema.post("save", handleSaveError);
productSchema.pre("findOneAndUpdate", setUpdateSetting);
productSchema.post("findOneAndUpdate", handleSaveError);

export const Product = model("product", productSchema);
