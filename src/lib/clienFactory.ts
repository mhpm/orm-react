import { createAxiosClient } from './axiosClient';
import { getGraphQLClient } from './graphqlClient';
import { getSupabaseClient } from './supabaseClient';

export type ClientType = 'axios' | 'graphql' | 'supabase';

export const createClient = (clientType: ClientType) => {
  switch (clientType) {
    case 'axios':
      return createAxiosClient();
    case 'graphql':
      return getGraphQLClient();
    case 'supabase':
      return getSupabaseClient();
    default:
      throw new Error('Invalid client type');
  }
};
