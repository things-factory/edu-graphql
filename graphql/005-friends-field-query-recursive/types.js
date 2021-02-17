const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Person {
    friends(from: Int, to: Int): [Person]
  }
`;

module.exports = { typeDefs };
