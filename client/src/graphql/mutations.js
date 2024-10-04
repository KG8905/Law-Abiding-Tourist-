import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUserMutation(
    $email: String!
    $password: String!
    $userName: String
  ) {
    addUser(email: $email, password: $password, userName: $userName) {
      token
      user {
        _id
        userName
        email
        createdAt
        updatedAt
      }
    }
  }
`;
