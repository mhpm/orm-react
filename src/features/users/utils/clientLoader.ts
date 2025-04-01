import { UserService } from '@/features/users/types/User';

export const loadClientApi = async (): Promise<UserService> => {
  const client = import.meta.env.VITE_API_CLIENT || 'supabase';

  switch (client) {
    case 'axios':
      return await import('@/features/users/services/usersAxiosService');
    case 'graphql':
      return await import('@/features/users/services/usersGraphqlService');
    default:
      return await import('@/features/users/services/userSupabaseService');
  }
};
