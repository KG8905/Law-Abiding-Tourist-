const { User, Law } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { dateScalar } = require('./scalar');

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await User.findById(context.user._id)
    },
    category: async (parent, {category}) => {
      return Law.find({ category: category }).limit(10);
    },
    location: async (parents, { location }) => {
      return Law.find({ location: location }).limit(10);
    },
    law: async () => {
      return Law.find();
    }
  },
  Mutation: {
    addUser: async (parent, argObj) => {
      try {
        const user = await User.create(argObj);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
        throw UserInputError
      }
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addLaw: async (parent, args, context) => {
      if (context.user) {
        const law = await Law.create(args);
        return law;
      };
      throw AuthenticationError;
    },
    addComment: async (parent, { _id, comments }, context) => {
      if(context.user) {
        const comment = await Law.findOneAndUpdate(
          { _id },
          { $push: { comments: comments } },
          { new: true }
        );
        return comment;
      };
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;
