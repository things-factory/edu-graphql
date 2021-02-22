const resolvers = {
  Query: {
    greeting: function () {
      return "Happy new year & Merry Christmas";
    },
  },

  Mutation: {
    sayHello: () => "Hello, GraphQL",
  },
};

module.exports = { resolvers };
