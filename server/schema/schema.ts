import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import resolvers from "../utils/resolvers";

const BookType: GraphQLObjectType = new GraphQLObjectType({
  name: "Book",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    genre: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: AuthorType,
      resolve: resolvers.getAuthorForType,
    },
  }),
});

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    books: {
      type: new GraphQLList(BookType),
      resolve: resolvers.getBookForType,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID), optional: true },
      },
      resolve: resolvers.getBooksForQuery,
    },

    books: {
      type: new GraphQLList(BookType),
      resolve: resolvers.getBooksForQuery,
    },

    author: {
      type: AuthorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: resolvers.getAuthorForQuery,
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve: resolvers.getAuthorsForQuery,
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
          type: new GraphQLNonNull(GraphQLString),
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: resolvers.addAuthorForMutations,
    },
    addBook: {
      type: BookType,

      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        genre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        authorId: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: resolvers.addBookForMutations,
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
