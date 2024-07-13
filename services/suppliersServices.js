import { Supplier } from "../models/Supplier.js";

export const listSuppliers = () => Supplier.find();

export const addSupplier = async (data) => Supplier.create(data);

export const updateSupplier = async (id, body) =>
  Supplier.findByIdAndUpdate(id, body);
