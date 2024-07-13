import { Order } from "../models/Order.js";

export const getOrders = async () => Order.find();
