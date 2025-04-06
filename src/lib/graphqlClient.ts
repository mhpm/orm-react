import { GraphQLClient } from 'graphql-request';

// Store the client instance
let graphqlClientInstance: GraphQLClient | null = null;

// Helper function to get the token
const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

// Helper function to create a new GraphQL client
const createNewGraphQLClient = (
  url: string,
  token: string | null
): GraphQLClient => {
  return new GraphQLClient(url, {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
};

// Main function to create or retrieve the GraphQL client
export const getGraphQLClient = (baseURL?: string): GraphQLClient => {
  const token = getAuthToken();
  const url = baseURL || 'https://orm-python-api.onrender.com/graphql';

  if (!graphqlClientInstance) {
    graphqlClientInstance = createNewGraphQLClient(url, token);
  }

  return graphqlClientInstance;
};
