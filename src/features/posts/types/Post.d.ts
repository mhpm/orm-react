export interface Post {
  id?: number;
  title: string;
  content: string;
  created_at: string | number;
  user_id?: string | number;
  user_email: string;
}
