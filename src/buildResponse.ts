const buildResponse = (statusCode: number, body: { [key: string]: any }) => {
  return {
    statusCode,
    headers: {
      "Content-type": "aaplication/json",
    },
    body: JSON.stringify(body),
  };
};

export default buildResponse;
