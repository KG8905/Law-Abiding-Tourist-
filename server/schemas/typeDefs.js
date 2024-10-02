const typeDefs = `

  scalar Date

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Comment {
    _id: ID!
    commentText: String!
    createdAt: String
  }

  type Law {
    _id: ID!
    category: String!
    location: String!
    source: String
    description: String!
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addLaw: Law
    addComment: Comment
  }
`;

module.exports = typeDefs;
