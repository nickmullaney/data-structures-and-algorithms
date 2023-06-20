'use strict';

function Insert(sorted, value) {
  let i = 0;

  while (value > sorted[i]) {
    i++;
  }

  for (let j = sorted.length; j > i; j--) {
    sorted[j] = sorted[j - 1];
  }

  sorted[i] = value;
}

function InsertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];

  for (let i = 1; i < input.length; i++) {
    Insert(sorted, input[i]);
  }

  return sorted;
}

const inputArray = [5, 2, 4, 6, 1, 3];
const sortedArray = InsertionSort(inputArray);

console.log(sortedArray); // [1, 2, 3, 4, 5, 6]
