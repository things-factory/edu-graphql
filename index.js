const { ApolloServer } = require("apollo-server");
const deepmerge = require("deepmerge");

const { typeDefs, resolvers } = deepmerge.all([
  require("./graphql-001-greeting"),
  require("./graphql-002-person-query"),
  require("./graphql-003-person-mutation"),
  require("./graphql-004-profile-field-query"),
  require("./graphql-005-friends-field-query-recursive"),
  //   require("./graphql-warmup"),
  //   require("./graphql-warmup"),
  //   require("./graphql-warmup"),
  //   require("./graphql-warmup"),
  //   require("./graphql-warmup"),
  //   require("./graphql-warmup"),
]);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
