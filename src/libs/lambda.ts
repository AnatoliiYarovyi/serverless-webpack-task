import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const middlewareEdytResponse = (): middy.MiddlewareObj<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> => {
  const after: middy.MiddlewareFn<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
  > = async (request): Promise<void> => {
    const { statusCode, body } = request.response;

    request.response = {
      statusCode,
      body: JSON.stringify(body),
    };
  };

  return { after };
};

export const middyfy = handler => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(middlewareEdytResponse());
};
