export const getCorsHeaders = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };
};

export const getHeaders = () => {
  return {
    ...getCorsHeaders(),
  };
};
