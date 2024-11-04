// src/lib/graphqlClient.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://orm-python-api.onrender.com/graphql';

const token = localStorage.getItem('token');

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    // Add your headers here
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : '',
    // Other headers as needed
  },
});
