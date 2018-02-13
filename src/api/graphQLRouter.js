import { makeExecutableSchema } from 'graphql-tools';
import { userType, userResolvers } from './resources/user';
import { songType } from './resources/song';
import merge from 'lodash.merge';
import { graphqlExpress } from 'apollo-server-express';

// root definitions for GraphQL
const baseSchema = `
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({
  // all the graphql files
  typeDefs: [baseSchema, userType, songType],
  // all the resolvers
  resolvers: merge({}, userResolvers),
});

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    user: req.user,
  },
}));
