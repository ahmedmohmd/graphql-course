import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://ahmed:95123574@cluster0.1bxam.mongodb.net/learn-graphql?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connection established...");

    const PORT: number = 9000;
    app.listen(PORT, () => {
      console.info(`server listening on port: ${PORT}`);
    });
  });
