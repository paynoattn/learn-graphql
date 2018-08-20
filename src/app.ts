import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { DbHelper } from './db';
import { schema } from './schema';
export const app = express();

export async function init() {
  console.log('Initializing application');
  const db = new DbHelper();
  await db.init();
  const apolloServer = new ApolloServer({ schema, playground: true });
  console.log('graphqlpath', apolloServer.graphqlPath);
  apolloServer.applyMiddleware({ app });
  return app;
}
