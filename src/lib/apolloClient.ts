// src/lib/graphqlClient.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://127.0.0.1:5001/graphql';

const token = localStorage.getItem('token');

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    // Add your headers here
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
    // Other headers as needed
  },
});

