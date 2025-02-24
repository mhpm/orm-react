export interface User {
  id?: string | number;
  first_name: string;
  last_name: string;
  email: string;
  role?: 'user' | 'admin';
  avatar?: string;
  password?: string;
}

export interface UserResponse {
  limit: number;
  page: number;
  total: number;
  users: User[];
}
