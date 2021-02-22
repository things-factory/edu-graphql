const people = require("../../data/person");

const resolvers = {
  Person: {
    friends: (parent, { from = 0, to }, context, info) => {
      const friends = people.slice(parent.id + 1, parent.id + 10);
      return friends.slice(from, to);
    },
  },
};

module.exports = { resolvers };
