import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema";

const app = express();

mongoose.connect(
  "mongodb://ahmed:95123574@cluster0-shard-00-00.learn-graphql.mongodb.net:27017,cluster0-shard-00-01.1bxam.mongodb.net:27017,cluster0-shard-00-02.1bxam.mongodb.net:27017/?ssl=true&replicaSet=atlas-8cs3pr-shard-0&authSource=admin&retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => console.log("connection open..."));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT: number = 9000;
app.listen(PORT, () => {
  console.info(`server listening on port: ${PORT}`);
});
