const { ApolloServer } = require("apollo-server");

const { typeDefs, resolvers, schemaDirectives } = require("./graphql");

const server = new ApolloServer({ typeDefs, resolvers, schemaDirectives });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
