import { pgPool } from "../pg-config";

export const getProducts = async () => {
  try {
    const client = await pgPool.connect();
    const result = await client.query(
      `SELECT 
     id, title, description, price, count 
     FROM products 
     INNER JOIN stocks 
     ON products.id = stocks.product_id`
    );
    await client.release();
    return result.rows;
  } catch (err) {
    console.log(err);
  }
};
export const getProductById = async (id) => {
  const client = await pgPool.connect();
  const result = await client.query(
    `SELECT 
     id, title, description, price, count 
     FROM products 
     INNER JOIN stocks 
     ON products.id = stocks.product_id
     WHERE id = $1`,
    [id]
  );
  await client.release();
  return result.rows[0];
};

export const createProduct = async (product) => {
  const { title, description, price, count } = product;
  const client = await pgPool.connect();
  try {
    await client.query("BEGIN");
    const queryText = `INSERT INTO 
                       products (title, description, price) 
                       VALUES ($1, $2, $3) 
                       RETURNING id`;
    const result = await client.query(queryText, [title, description, price]);
    const productId = result.rows[0].id;
    const queryText2 = `INSERT INTO 
                        stocks (product_id, count) 
                        VALUES ($1, $2)`;
    await client.query(queryText2, [productId, count]);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
};
