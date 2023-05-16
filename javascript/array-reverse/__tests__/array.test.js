'use strict';
const reverseArray = (arr) => {
  let front = 0;
  let end = arr.length - 1;
  while (end > front) {

    let temp = arr[front];
    arr[front] = arr[end];
    arr[end] = temp;

    front++;
    end--;
  }
  return arr;
};


describe('reverseArray', () => {
  test('reverses an array with elements', () => {
    const array1 = [1, 2, 3, 4, 5];
    expect(reverseArray(array1)).toEqual([5, 4, 3, 2, 1]);
  });

  test('returns an empty array when reversing an empty array', () => {
    const array2 = [];
    expect(reverseArray(array2)).toEqual([]);
  });

  test('reverses an array with a single element', () => {
    const array3 = [42];
    expect(reverseArray(array3)).toEqual([42]);
  });

  test('reverses an array with strings', () => {
    const array4 = ['apple', 'banana', 'cherry'];
    expect(reverseArray(array4)).toEqual(['cherry', 'banana', 'apple']);
  });
});
