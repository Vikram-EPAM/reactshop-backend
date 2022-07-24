export const getProducts = async (client) => {
  await client.connect();
  const result = await client.query("SELECT * FROM products");
  await client.end();
  return result.rows;
};
export const getProductById = async (id, client) => {
  await client.connect();
  const result = await client.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);
  await client.end();
  return result.rows[0];
};
