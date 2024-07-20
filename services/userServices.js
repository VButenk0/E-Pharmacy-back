import User from "../models/User.js";
import bcrypt from "bcrypt";

export const findUserById = (id) => {
  return User.findById(id);
};

export const findUser = (filter) => {
  return User.findOne(filter);
};

export const setToken = (id, token = "") => {
  return User.findByIdAndUpdate(id, { token });
};
