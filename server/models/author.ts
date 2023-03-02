import { model, Schema } from "mongoose";

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default model("Author", authorSchema, "authors");
