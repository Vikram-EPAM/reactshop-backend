import { getProducts } from "./service";

export const handler = async (event, context) => {
  try {
    const products = await getProducts();
    return {
      statusCode: 200,
      body: JSON.stringify({
        products,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err,
      }),
    };
  }
};

