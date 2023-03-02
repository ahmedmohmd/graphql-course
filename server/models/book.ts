import { model, Schema } from "mongoose";

const schema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

export default model("Book", schema);
