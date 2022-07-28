import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./GraphQl/typeDefs.js";
import { resolvers } from "./GraphQl/resolvers.js";
import "dotenv/config.js";
import "./API/database.js";

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log("server running on port", port);
  });
};

startServer();
