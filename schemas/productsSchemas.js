import Joi from "joi";

export const createProductSchema = Joi.object({
  photo: Joi.string(),
  name: Joi.string().required(),
  category: Joi.string()
    .valid(
      "Medicine",
      "Heart",
      "Head",
      "Hand",
      "Leg",
      "Skin Care",
      "Dental Care"
    )
    .required(),
  stock: Joi.number().required(),
  suppliers: Joi.string().required(),
  price: Joi.string().required(),
});

export const updateProductSchema = Joi.object({
  photo: Joi.string(),
  name: Joi.string(),
  category: Joi.string().valid(
    "Medicine",
    "Heart",
    "Head",
    "Hand",
    "Leg",
    "Skin Care",
    "Dental Care"
  ),
  stock: Joi.number(),
  suppliers: Joi.string(),
  price: Joi.string(),
});
