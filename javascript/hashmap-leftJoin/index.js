// leftJoin.js

function leftJoin(hashmap1, hashmap2) {
  const result = [];
  for (let key in hashmap1) {
    const value1 = hashmap1[key];
    const value2 = hashmap2[key];
    result.push([key, value1, value2 || null]);
  }
  return result;
}

module.exports = leftJoin;
