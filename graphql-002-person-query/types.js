const gql = require("graphql-tag");

const typeDefs = gql`
  type Person {
    id: String
    name: String
    age: Int
  }

  extend type Query {
    person(name: String!): Person
    people(from: Int, to: Int): [Person]
  }
`;

module.exports = { typeDefs };
