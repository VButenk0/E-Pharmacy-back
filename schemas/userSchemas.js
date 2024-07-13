import Joi from "joi";
import { emailRegexp } from "../constants/regexp.js";

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
