import { createAxiosClient } from './axiosClient';
import { createGraphQLClient } from './graphqlClient';
import { createSupabaseClient } from './supabaseClient';

export type ClientType = 'axios' | 'graphql' | 'supabase';

export const createClient = (clientType: ClientType, baseURL: string) => {
  switch (clientType) {
    case 'axios':
      return createAxiosClient(baseURL);
    case 'graphql':
      return createGraphQLClient(baseURL);
    case 'supabase':
      return createSupabaseClient(baseURL);
    default:
      throw new Error('Invalid client type');
  }
};
