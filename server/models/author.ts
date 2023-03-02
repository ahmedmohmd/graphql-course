import { model, Schema } from "mongoose";
import Book from "./book";

const schema = new Schema({
  name: String,
  age: Number,
});

export default model("Author", schema);
