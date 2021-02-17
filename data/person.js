module.exports = new Array(100).fill(null).map((_, idx) => {
  return {
    id: idx,
    name: "name" + idx,
    age: Math.floor(Math.random() * 100),
  };
});
