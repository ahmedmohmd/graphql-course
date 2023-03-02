import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

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

const BookType = new GraphQLObjectType({
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

const AuthorType = new GraphQLObjectType({
  name: "Author",

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
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
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
