import graphql, { GraphQLSchema } from "graphql";
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

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
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Get Data from DB
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
//   name: "Author",
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//   }),
// });
