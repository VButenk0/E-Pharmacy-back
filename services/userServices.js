import User from "../models/User.js";
import bcrypt from "bcrypt";

export const signUp = async (data) => {
  const { password } = data;
  const hashPassword = await bcrypt.hash(password, 6);
  return User.create({ ...data, password: hashPassword });
};

export const findUserById = (id) => {
  return User.findById(id);
};

export const findUser = (filter) => {
  return User.findOne(filter);
};

export const setToken = (id, token = "") => {
  return User.findByIdAndUpdate(id, { token });
};
