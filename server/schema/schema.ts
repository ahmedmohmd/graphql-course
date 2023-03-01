import graphql from "graphql";

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

// const AuthorType = new GraphQLObjectType({
//   name: "Author",
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//   }),
// });
