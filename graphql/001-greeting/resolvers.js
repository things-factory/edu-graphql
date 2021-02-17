const resolvers = {
  Query: {
    greeting: () => "Happy new year & Merry Christmas",
  },

  Mutation: {
    sayHello: () => "Hello, GraphQL",
  },
};

module.exports = { resolvers };
