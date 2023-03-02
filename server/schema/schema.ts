import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import mongoose from "mongoose";
import Author from "../models/author";
import Book from "../models/book";
const dummyData = [
  {
    id: "1",
    name: "Book 1",
    genre: "Comedy",
    authorId: "1",
  },
  {
    id: "2",
    name: "Book 2",
    genre: "Comedy",
    authorId: "2",
  },
  {
    id: "3",
    name: "Book 3",
    genre: "Comedy",
    authorId: "2",
  },
];

const dummyAuthros = [
  { id: "1", name: "Ahmed Mohamed", age: 10 },
  { id: "2", name: "Hazem", age: 20 },
];

const BookType: GraphQLObjectType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    author: {
      type: AuthorType,
      resolve(parent) {
        return dummyAuthros.find((author) => author.id === parent.authorId);
      },
    },
  }),
});

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: "Author",

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        return dummyData.filter((book) => book.authorId === parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID, optional: true },
      },
      resolve(parent, { id }) {
        return dummyData.find((book) => book.id === id);
      },
    },

    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return dummyData;
      },
    },

    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(_, { id }) {
        return dummyAuthros.find((author) => author.id === id);
      },
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return dummyAuthros;
      },
    },
  }),
});

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addAuthor: {
      type: AuthorType,
      args: {
        name: {
          type: GraphQLString,
        },
        age: {
          type: GraphQLInt,
        },
      },
      async resolve(_, { name, age }) {
        const author = new Author({
          name,
          age,
        });
        await author.save();
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
