import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query getMeQuery {
    me {
      _id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const QUERY_LAWS = gql`
  query getLawsQuery{
    laws {
      location
      category
      source
      description
      title
      comments {
        userName
        commentText
      }
    }
  }
`;