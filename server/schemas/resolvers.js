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
      return await User.findById(context.user._id).populate('lawsByUser')
    },
    category: async (parent, {category}) => {
      return await Law.find({ category: category }).limit(10);
    },
    location: async (parents, { location }) => {
      return await Law.find({ location: location }).limit(10);
    },
    laws: async () => {
      return await Law.find();
    },
    lawById: async (parent, { lawId }) => {
      return await Law.findOne({ _id: lawId });
    },
    allUsers: async () => {
      return await User.find().populate('lawsByUser');
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
        const law = await Law.create(args.lawInput);

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { lawsByUser: law } },
          { new: true }
        );

        return law;
      };
      throw AuthenticationError;
    },
    addComment: async (parent, args, context) => {
      const { _id, commentInput } = args
      if(context.user) {
        const comment = await Law.findOneAndUpdate(
          { _id },
          { $push: { comments: commentInput } },
          { new: true }
        );
        return comment;
      };
      throw AuthenticationError;
    },
    removeLaw: async (parent, { lawId }, context) => {
      if(context.user) {
        return Law.findOneAndDelete({ _id: lawId });
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { lawId, commentId }, context) => {
      if(context.user) {
        return Law.findOneAndUpdate(
          { _id: lawId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;
