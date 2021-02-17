const gql = require("graphql-tag");

const typeDefs = gql`
  extend type Person {
    "Person의 아바타 이미지 정보입니다."
    avatar: String
  }
`;

module.exports = { typeDefs };
