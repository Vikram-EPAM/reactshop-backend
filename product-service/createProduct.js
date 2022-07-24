import { getHeaders } from "../utils/headers";
import { createProduct } from "./service";
import Joi from "joi";

const productSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  count: Joi.number().positive().required(),
});

export const handler = async (event, context) => {
  const headers = getHeaders();
  const product = JSON.parse(event.body);
  try {
    const val = await productSchema.validateAsync(product);
  } catch (e) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: e.message,
      }),
    };
  }
  try {
    await createProduct(product);
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({
        message: "Product created",
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: e.message,
      }),
    };
  }
};
