const gql = require("graphql-tag");

const typeDefs = gql`
  """
  Person에 대해서 설명할 수 있습니다.
  여러줄 설명이 필요한 경우에는 이렇게 표현할 수 있습니다.
  """
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
