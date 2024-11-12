import { gql, GraphQLClient } from 'graphql-request';
import { User } from '@/modules/users/types/User';
import { createClient } from '@/lib/clienFactory';

const graphqlClient = createClient(
  'graphql',
  'https://orm-python-api.onrender.com/graphql'
) as GraphQLClient;

// Fetch all users
export const fetchUsers = async () => {
  const query = gql`
    query {
      users {
        id
        email
        first_name
        last_name
        role
        avatar
      }
    }
  `;
  const data = await graphqlClient.request<{ users: User[] }>(query);
  return data.users;
};

// Fetch a user by ID
export const fetchUserById = async (id: number | string) => {
  const query = gql`
    query ($user_id: ID!) {
      user(user_id: $user_id) {
        id
        email
        first_name
        last_name
        role
        avatar
      }
    }
  `;
  const variables = { user_id: id };
  const data = await graphqlClient.request<{ user: User }>(query, variables);
  return data.user;
};

// Create a new user
export const createUser = async (user: User): Promise<User> => {
  const mutation = gql`
    mutation (
      $first_name: String!
      $last_name: String!
      $email: String!
      $password: String!
      $role: String
      $avatar: String
    ) {
      createUser(
        first_name: $first_name
        last_name: $last_name
        email: $email
        password: $password
        role: $role
        avatar: $avatar
      ) {
        id
        email
        first_name
        last_name
        role
        avatar
      }
    }
  `;

  const variables = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password, // Make sure to pass the password field here
    role: user.role,
    avatar: user.avatar,
  };

  const data = await graphqlClient.request<{ createUser: User }>(
    mutation,
    variables
  );
  return data.createUser;
};

// Update an existing user
export const updateUser = async (user: User) => {
  const mutation = gql`
    mutation (
      $user_id: ID!
      $first_name: String
      $last_name: String
      $email: String
      $role: String
      $password: String
      $avatar: String
    ) {
      updateUser(
        user_id: $user_id
        first_name: $first_name
        last_name: $last_name
        email: $email
        role: $role
        password: $password
        avatar: $avatar
      ) {
        id
        email
        first_name
        last_name
        role
        avatar
      }
    }
  `;

  const variables = {
    user_id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role,
    password: user.password,
    avatar: user.avatar,
  };

  const data = await graphqlClient.request<{ updateUser: User }>(
    mutation,
    variables
  );
  return data.updateUser;
};

// Delete a user
export const deleteUser = async (id: number | string): Promise<User> => {
  const mutation = gql`
    mutation ($user_id: ID!) {
      deleteUser(user_id: $user_id)
    }
  `;
  const variables = { user_id: id };
  return graphqlClient.request(mutation, variables);
};
