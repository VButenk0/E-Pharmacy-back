import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Completed", "Confirmed", "Pending", "Cancelled", "Processing"],
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Order = model("order", orderSchema);
