import { User } from './user.model';
import merge from 'lodash.merge';

const getMe = (_, __, { user }) => {
  return user;
};

const updateMe = (_, { input }, { user }) => {
  merge(user, input);
  return user.save();
};

export const userResolvers = {
  Query: {
    getMe,
  },
  User: {
    friends: user => {
      console.log('in friends');
      // query the db for frinds of this user
      return ['Tom', 'Destiny'];
    },
    playlist() {
      return Playlist.find({}).exec();
    },
  },
  Mutation: {
    updateMe,
  },
};
