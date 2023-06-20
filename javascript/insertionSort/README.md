## InsertSort

### Author: Nick Mullaney

The `InsertionSort` function takes an array and sorts it using the Insertion Sort algorithm.

### `InsertionSort(input)`

Description: Sorts an array using the Insertion Sort algorithm.

Parameters:
- `input`: The array to be sorted.

Return Value: The sorted array.

Usage Example:

```javascript
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
```

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using npm or yarn:

```shell
npm install
```

## Tests

To run the tests for the `InsertionSort` function, use the following command:

```shell
npm test
```

The tests cover various scenarios and ensure the correct behavior of the `InsertionSort` function.

## UML
![Alt text](<../assets/code challenge 26.png>)

## License

This project is licensed under the [MIT License](LICENSE).

## Collaboration

Thanks to chatgpt for helping with the testing.