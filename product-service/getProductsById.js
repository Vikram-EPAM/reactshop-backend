import { getProductById } from "./service";

export const handler = async (event, context) => {
  try {
    console.log(event.pathParameters.id);
    const product = await getProductById(event.pathParameters.id);
    if (!product) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Product not found",
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(product),
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

