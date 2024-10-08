const typeDefs = `

  scalar Date

  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
    lawsByUser: [Law]
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

  input lawInput {
    category: String!
    location: String!
    source: String
    description: String!
    title: String!
  }

  input commentInput {
    userName: String!
    commentText: String!
  }

  type Query {
    me: User
    category(category: String!): [Law]
    location(location: String!): [Law]
    laws: [Law]
    lawById(lawId: ID!): Law
    allUsers: [User]
  }

  type Mutation {
    addUser(userName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addLaw(lawInput: lawInput): Law
    addComment(_id: ID!, commentInput: commentInput): Comment
    removeLaw(lawId: ID!): Law
    removeComment(commentId: ID!, lawId: ID!): Law
  }
`;

module.exports = typeDefs;
