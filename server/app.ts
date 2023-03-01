import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

const PORT: number = 9000;
app.listen(PORT, () => {
  console.info(`server listening on port: ${PORT}`);
});
