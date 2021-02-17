const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Person {
    favorite: String @l20n(lng: "kr")
  }

  directive @l20n(lng: String) on FIELD_DEFINITION
`;

module.exports = { typeDefs };
