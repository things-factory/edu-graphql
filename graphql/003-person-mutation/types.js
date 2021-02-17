const gql = require("graphql-tag");

const typeDefs = gql`
  input PersonNew {
    name: String!
    age: Int!
  }

  input PersonPatch {
    name: String
    age: Int
  }

  extend type Mutation {
    createPerson(person: PersonNew!): Person
    updatePerson(id: Int!, patch: PersonPatch!): Person
  }
`;

module.exports = { typeDefs };
