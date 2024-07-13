import { Customer } from "../models/Customer.js";

export const listCustomers = () => Customer.find();

export const getOneCustomer = async (id) => Customer.findById(id);
