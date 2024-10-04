const typeDefs = `

  scalar Date

  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Comment {
    _id: ID!
    userName: String!
    commentText: String!
    createdAt: String
  }

  type Law {
    _id: ID!
    category: String!
    location: String!
    source: String
    description: String!
    title: String!
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    Users: [User]!
    user(userId: ID!): User
    law(lawId: ID!): Law
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addLaw: Law
    addComment: Comment
  }
`;

module.exports = typeDefs;
