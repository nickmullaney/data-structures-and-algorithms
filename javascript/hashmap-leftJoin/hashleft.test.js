// testLeftJoin.js

const leftJoin = require('./index.js');

// Define your test cases using Jest
describe('Left Join', () => {
  test('Test Case 1', () => {
    const hashmap1 = {'happy': 'joyful', 'sad': 'unhappy', 'good': 'great'};
    const hashmap2 = {'happy': 'sad', 'good': 'bad', 'small': 'big'};
    const expectedOutput = [['happy', 'joyful', 'sad'], ['sad', 'unhappy', null], ['good', 'great', 'bad']];
    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedOutput);
  });

  test('Test Case 2', () => {
    const hashmap1 = {'apple': 'fruit', 'carrot': 'vegetable'};
    const hashmap2 = {'apple': 'red', 'carrot': 'orange'};
    const expectedOutput = [['apple', 'fruit', 'red'], ['carrot', 'vegetable', 'orange']];
    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedOutput);
  });

  test('Test Case 3', () => {
    const hashmap1 = {'cat': 'animal', 'chair': 'furniture'};
    const hashmap2 = {};
    const expectedOutput = [['cat', 'animal', null], ['chair', 'furniture', null]];
    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedOutput);
  });
});
