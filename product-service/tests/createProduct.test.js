import { handler } from "../createProduct";
import { createProduct } from "../service";

jest.mock("../service");

describe("createProduct", () => {
  beforeEach(() => {
    createProduct.mockImplementation(() => {
      return Promise.resolve({
        statusCode: 201,
        body: JSON.stringify({
          message: "Product created",
        }),
      });
    });
  });
  it("should create product", async () => {
    const res = await handler({
      body: JSON.stringify({
        title: "Product 1",
        description: "Description 1",
        price: 1,
        count: 10,
      }),
    });
    expect(res.body).toEqual(
      JSON.stringify({
        message: "Product created",
      })
    );
    expect(res.statusCode).toEqual(201);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });

  it("should return 400 when product schema is incorrect", async () => {
    const res = await handler({
      body: JSON.stringify({
        title: "",
        description: "",
        price: -1,
        count: 10,
      }),
    });
    expect(res.statusCode).toEqual(400);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });

  it("should return 500 when error occurs", async () => {
    createProduct.mockImplementation(() => {
      return Promise.reject("error");
    });
    const res = await handler({
      body: JSON.stringify({
        title: "Product 1",
        description: "Description 1",
        price: 1,
        count: 10,
      }),
    });
    expect(res.statusCode).toEqual(500);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });
});
