const people = require("../../data/person");

const resolvers = {
  Query: {
    person: (root, { name }, context, info) => {
      return people.find((person) => person.name === name);
    },

    people: (root, { from = 0, to }, context, info) => {
      return people.slice(from, to);
    },
  },
};

module.exports = { resolvers };
