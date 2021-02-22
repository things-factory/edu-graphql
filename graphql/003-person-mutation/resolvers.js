const people = require("../../data/person");

const resolvers = {
  Mutation: {
    createPerson: (parent, { person }, context, info) => {
      people.push({
        id: people[people.length - 1].id + 1,
        ...person,
      });

      return people[people.length - 1];
    },

    updatePerson: (parent, { id, patch }, context, info) => {
      var person = people.find((person) => person.id === id);

      if (person) {
        return Object.assign(person, patch);
      } else {
        return null;
      }
    },
  },
};

module.exports = { resolvers };
