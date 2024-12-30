interface Routes {
  [key: string]: string;
}

export const ROUTES: Routes = {
  USERS: 'users',
  EDIT_USER: 'users/edit/:id',
  POSTS: 'posts',
  CHALLENGES: 'challenges',
  TICTACTOE: 'tictactoe',
  LOCALSTORAGE: 'localstorage',
  ACCORDION: 'accordion',
  HABITCHART: 'habitchart',
  NOT_FOUND: '*',
} as const;
