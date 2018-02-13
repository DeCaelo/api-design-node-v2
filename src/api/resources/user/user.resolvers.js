import { User } from './user.model';
import merge from 'lodash.merge';

const getMe = (_, __, { user }) => {
  return {
    id: 1432453,
    username: 'hello',
    createdAt: '12 feb 10h',
    updatedAt: '12 feb 11h03',
  };
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
  },
  Mutation: {
    updateMe,
  },
};
