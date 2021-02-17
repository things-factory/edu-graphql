const gql = require("graphql-tag");

const typeDefs = gql`
  type Greeting {
    message: String
  }

  type Query {
    greeting: String
  }

  type Mutation {
    sayHello: String
  }
`;

module.exports = { typeDefs };
