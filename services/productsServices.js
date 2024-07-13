import { Product } from "../models/Product.js";

export const listProducts = () => Product.find();

export const addProduct = async (data) => Product.create(data);

export const updateProduct = async (id, body) =>
  Product.findByIdAndUpdate(id, body, { new: true });

export const removeProduct = async (id) => Product.findByIdAndDelete(id);
