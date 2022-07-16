import { handler } from "../getProductsList";
import { getProducts } from "../service";

jest.mock("../service");
describe("getProductsList", () => {
  beforeEach(() => {
    getProducts.mockImplementation(() => {
      return Promise.resolve([
        {
          id: "1",
          quantity: 10,
        },
        {
          id: "2",
          quantity: 20,
        },
      ]);
    });
  });
  it("should return products", async () => {
    const res = await handler({});
    expect(res.body).toEqual(
      JSON.stringify({
        products: [
          {
            id: "1",
            quantity: 10,
          },
          {
            id: "2",
            quantity: 20,
          },
        ],
      })
    );
    expect(res.statusCode).toEqual(200);
    expect(res.headers).toEqual({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });
  });
  it("should return 500", async () => {
    getProducts.mockImplementation(() => {
      return Promise.reject("error");
    });
    const res = await handler({});
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
