const people = require("../../data/person");

const resolvers = {
  Person: {
    friends: (root, { from = 0, to }, context, info) => {
      const friends = people.slice(root.id + 1, root.id + 10);
      return friends.slice(from, to);
    },
  },
};

module.exports = { resolvers };
