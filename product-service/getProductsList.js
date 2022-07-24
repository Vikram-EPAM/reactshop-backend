import { getHeaders } from "../utils/headers";
import { getProducts } from "./service";

export const handler = async (event, context) => {
  const headers = getHeaders();
  try {
    const products = await getProducts();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        products,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: err,
      }),
    };
  }
};

