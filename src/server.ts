const express = require('express');
const graphqlHTTP = require('express-graphql');
import { createGraphQL } from '@portable-profiles/directory';
import { MemoryPersistence } from '@portable-profiles/persistence';

const memory = new MemoryPersistence();
const app = express();

const { schema, rootValue } = createGraphQL(memory);

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(80);
