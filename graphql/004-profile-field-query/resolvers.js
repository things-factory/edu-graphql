const avatar =
  "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg";

const resolvers = {
  Person: {
    avatar: (root, _, context, info) => {
      return avatar;
    },
  },
};

module.exports = { resolvers };
