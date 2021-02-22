const avatar =
  "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg";

const resolvers = {
  Person: {
    avatar: (parent, _, context, info) => {
      return avatar;
    },
    name: (parent) => {
      return parent.name;
    },
  },
};

module.exports = { resolvers };
