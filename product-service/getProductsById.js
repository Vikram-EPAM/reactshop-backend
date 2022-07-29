import { getHeaders } from "../utils/headers";
import { getProductById } from "./service";

export const handler = async (event, context) => {
  const headers = getHeaders();
  console.log("getProductById request", event.pathParameters.id);
  try {
    const product = await getProductById(event.pathParameters.id);
    if (!product) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({
          message: "Product not found",
        }),
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(product),
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

