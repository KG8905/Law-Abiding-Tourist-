import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query getMeQuery {
    me {
      _id
      userName
      email
      createdAt
      updatedAt
      lawsByUser {
        _id
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

export const QUERY_LAWS_BY_LOCATION = gql`
  query Query($location: String!) {
    location(location: $location) {
      title
      source
      location
      description
      comments {
        userName
        createdAt
        commentText
        _id
      }
      category
      _id
    }
  }
`;