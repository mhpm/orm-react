import { GraphQLClient } from 'graphql-request';

export const createGraphQLClient = (baseURL: string) => {
  const token = localStorage.getItem('token');

  return new GraphQLClient(baseURL, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
};
