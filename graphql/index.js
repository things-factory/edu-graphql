const deepmerge = require("deepmerge");

const { typeDefs, resolvers, schemaDirectives } = deepmerge.all([
  require("./001-greeting"),
  require("./002-person-query"),
  require("./003-person-mutation"),
  require("./004-profile-field-query"),
  require("./005-friends-field-query-recursive"),
  require("./006-directive"),
]);

module.exports = {
  typeDefs,
  resolvers,
  schemaDirectives,
};
