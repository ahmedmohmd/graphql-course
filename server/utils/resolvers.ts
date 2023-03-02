import Author from "../models/author";
import Book from "../models/book";

type Param = Record<string, string>;

const getAuthorForType = async ({ authorId }: Param) => {
  try {
    const author = await Author.findById(authorId);
    return author;
  } catch (error) {
    console.log(error);
  }
};

const getBookForType = async ({ id }: Param) => {
  try {
    return await Book.find({
      authorId: id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getBooksForQuery = async (_: Param, { id }: Param) => {
  try {
    return await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const getAuthorForQuery = async (_: Param, { id }: Param) => {
  try {
    return await Author.findById(id);
  } catch (error) {
    console.log(error);
  }
};
const getAuthorsForQuery = async () => {
  try {
    return await Author.find({});
  } catch (error) {
    console.log(error);
  }
};
const getBookForQuery = async (_: Param, { id }: Param) => {
  try {
    return await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const addAuthorForMutations = async (_: Param, { name, age }: Param) => {
  try {
    return await Author.create({
      name,
      age,
    });
  } catch (error) {
    console.log(error);
  }
};
const addBookForMutations = async (
  _: Param,
  { name, genre, authorId }: Param
) => {
  try {
    return await Book.create({ name, genre, authorId });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAuthorForType,
  getBookForType,
  getBooksForQuery,
  getAuthorForQuery,
  getAuthorsForQuery,
  getBookForQuery,
  addAuthorForMutations,
  addBookForMutations,
};
