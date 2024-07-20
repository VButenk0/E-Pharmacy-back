import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findUser, setToken, signUp } from "../services/userServices.js";
import ctrWrapper from "../decorators/ctrWrapper.js";
import HttpError from "../helpers/HttpError.js";

dotenv.config();

const sign = async (user) => {
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  await setToken(user._id, token);
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUser({ email });

  if (!user) {
    throw HttpError(401, "Invalid email or password");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Invalid email or password");
  }
  const token = await sign(user);
  res.json({
    token,
    name: user.email.split("@")[0],
    email,
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await setToken(_id);
  res.status(204).end();
};

const getUserInfo = async (req, res) => {
  console.log(req.user);
  const { name, email } = req.user;
  res.status(200).json({ name, email });
};

export default {
  login: ctrWrapper(login),
  logout: ctrWrapper(logout),
  getUserInfo: ctrWrapper(getUserInfo),
};
