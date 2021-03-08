"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { getErrorCode } = require("./config/errorHandler");
//const bodyParser = require('body-parser')

const { readFileSync } = require("fs");
const resolvers = require("./lib/resolvers");
const db = require("./database");

const app = express();
const port = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV !== "production";

db.sequelize.sync();

const typeDefs = readFileSync(
  path.join(__dirname, "lib", "schema.graphql"),
  "utf-8"
);
const schema = makeExecutableSchema({ typeDefs, resolvers });
app.use(cors());

app.use("/api", (req, res) => {
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev,
    context: { req },
    formatError: (err) => {
      const error = getErrorCode(err.message);
      return { message: "Valor no encontrado", statusCode: 404 };
    },
  })(req, res)
});
//app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
//app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
