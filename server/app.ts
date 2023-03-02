import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema";

const app = express();

mongoose.connect(
  "mongodb+srv://cicada:951@cluster0.1bxam.mongodb.net/?retryWrites=true&w=majority"
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
