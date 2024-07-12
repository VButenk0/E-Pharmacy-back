import { Order } from "../models/Order";

export const getOrders = async () => Order.find();
