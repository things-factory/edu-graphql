var count = 0;

const resolvers = {
  Person: {
    favorite: (root, params, context, info) => {
      return ["desk", "cup", "phone"][Math.floor(Math.random() * 3)];
    },
  },
};

module.exports = { resolvers };
