export const getProducts = async (client) => {
  await client.connect();
  const result = await client.query(
    `SELECT 
     id, title, description, price, count 
     FROM products 
     INNER JOIN stocks 
     ON products.id = stocks.product_id`
  );
  await client.end();
  return result.rows;
};
export const getProductById = async (id, client) => {
  await client.connect();
  const result = await client.query(
    `SELECT 
     id, title, description, price, count 
     FROM products 
     INNER JOIN stocks 
     ON products.id = stocks.product_id
     WHERE id = $1`,
    [id]
  );
  await client.end();
  return result.rows[0];
};
