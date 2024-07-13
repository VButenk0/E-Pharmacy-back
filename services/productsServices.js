import { Product } from "../models/Product";

export const listProducts = () => Product.find();

export const addProduct = async (data) => Product.create(data);

export const updateProduct = async (id, body) =>
  Product.findByIdAndUpdate(id, body);

export const removeProduct = async (id) => Product.findByIdAndDelete(id);
