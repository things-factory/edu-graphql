const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");

const dictionary = {
  kr: {
    cup: "컵",
    desk: "책상",
    phone: "전화기",
  },
};

class L20nDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { lng } = this.args;

    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args);

      if (typeof result == "string") {
        const dic = dictionary[lng];

        if (dic && dic[result]) {
          return dic[result];
        }
      }

      return result;
    };

    // The result should becomes a String, the field type should be changed:
    // field.type = GraphQLString;
  }
}

module.exports = {
  schemaDirectives: {
    l20n: L20nDirective,
  },
};
