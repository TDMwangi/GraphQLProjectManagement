require('dotenv').config();
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './typedefs/schema';

const port = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
