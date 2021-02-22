const people = require("../../data/person");

const resolvers = {
  Query: {
    person: (parent, { name }, context, info) => {
      return people.find((person) => person.name === name);
    },

    people: (parent, { from = 0, to }, context, info) => {
      return people.slice(from, to);
    },
  },
};

module.exports = { resolvers };
