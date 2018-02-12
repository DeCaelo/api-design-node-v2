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

export const userResolvers = {
  Query: {
    getMe,
  },
};