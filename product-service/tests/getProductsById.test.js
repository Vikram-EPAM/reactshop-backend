import { handler } from "../getProductsById";
import { getProductById } from "../service";

jest.mock("../service");

describe("getProductsById", () => {
  beforeEach(() => {
    getProductById.mockImplementation(() => {
      return Promise.resolve({
        id: "1",
        quantity: 10,
      });
    });
  });
  it("should return product", async () => {
    const res = await handler({
      pathParameters: {
        id: "1",
      },
    });
    expect(res.body).toEqual(
      JSON.stringify({
        id: "1",
        quantity: 10,
      })
    );
    expect(res.statusCode).toEqual(200);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });
  it("should return 404", async () => {
    getProductById.mockImplementation(() => {
      return Promise.resolve(null);
    });
    const res = await handler({
      pathParameters: {
        id: "-1",
      },
    });
    expect(res.body).toEqual(
      JSON.stringify({
        message: "Product not found",
      })
    );
    expect(res.statusCode).toEqual(404);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });

  it("should return 500", async () => {
    getProductById.mockImplementation(() => {
      return Promise.reject("error");
    });
    const res = await handler({
      pathParameters: {
        id: "-1",
      },
    });
    expect(res.body).toEqual(
      JSON.stringify({
        message: "error",
      })
    );
    expect(res.statusCode).toEqual(500);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });
});
