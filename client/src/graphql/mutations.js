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

export const ADD_LAW = gql`
mutation AddLaw($lawInput: lawInput) {
  addLaw(lawInput: $lawInput) {
    _id
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addCommentMutation($id: ID!, $commentInput: commentInput) {
    addComment(_id: $id, commentInput: $commentInput) {
      _id
      commentText
      userName
      createdAt
    }
  }
`;

export const REMOVE_LAW = gql`
  mutation removeLawMutation($lawId: ID!) {
    removeLaw(lawId: $lawId) {
      _id
      title
      location
      description
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeCommentMutation($commentId: ID!, $lawId: ID!) {
    removeComment(commentId: $commentId, lawId: $lawId) {
      _id
      title
      category
      source
      location
      description
      comments {
        _id
        commentText
        userName
      }
    }
  }
`;