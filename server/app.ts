import express from "express";

const app = express();

const PORT: number = 9000;
app.listen(PORT, () => {
  console.info(`server listening on port: ${PORT}`);
});
