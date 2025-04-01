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
  count: number | null;
  page: number;
  pageSize: number;
  totalPages: number;
  users: User[];
}

export interface UserService {
  getUsers(page?: number, pageSize?: number): Promise<UserResponse>;
  getUserById(id: number | string): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<User>;
}
