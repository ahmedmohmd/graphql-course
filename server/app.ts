import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use("/graphql", graphqlHTTP({}));

const PORT: number = 9000;
app.listen(PORT, () => {
  console.info(`server listening on port: ${PORT}`);
});
