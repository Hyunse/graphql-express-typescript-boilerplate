import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, './.env.development') });
// dotenv.config({ path: path.resolve(__dirname, './.env') });

import app from './app';
import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import connectionOptions from './ormConfig';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

createConnection(connectionOptions).then(() => {
  app.start(appOptions, () => {
    console.log(`Server is listening on ${PORT}`);
  });
});
