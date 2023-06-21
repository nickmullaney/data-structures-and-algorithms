function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

// Test cases
const testCases = [
  {
    input: [5, 3, 8, 4, 2],
    expected: [2, 3, 4, 5, 8],
  },
  {
    input: [1, 7, 2, 6, 3],
    expected: [1, 2, 3, 6, 7],
  },
  {
    input: [10, 5, 8, 2, 1, 6],
    expected: [1, 2, 5, 6, 8, 10],
  },
];

// Run tests
testCases.forEach((testCase, index) => {
  const { input, expected } = testCase;
  const array = [...input];
  mergeSort(array);

  if (JSON.stringify(array) === JSON.stringify(expected)) {
    console.log(`Test case ${index + 1} passed.`);
  } else {
    console.error(`Test case ${index + 1} failed.`);
    console.error(`Expected: ${expected}`);
    console.error(`Actual: ${array}`);
  }
});
