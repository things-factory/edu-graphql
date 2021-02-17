const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Person {
    avatar: String
  }
`;

module.exports = { typeDefs };
