import Joi from "joi";

export const createPortionSchema = Joi.object({
  productInfo: Joi.string().required(),
  category: Joi.string().required(),
  stock: Joi.number().required(),
  suppliers: Joi.number().required(),
  price: Joi.string().required(),
});

export const updatePortionSchema = Joi.object({
  amount: Joi.number(),
  time: Joi.string(),
  dailyNorma: Joi.number(),
  consumeRatio: Joi.number(),
});
