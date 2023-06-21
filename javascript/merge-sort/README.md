# Merge Sort

## Author: Nick Mullaney

The `mergeSort` function takes an array and sorts it using the Merge Sort algorithm.

### `mergeSort(input)`

Description: Sorts an array using the Merge Sort algorithm.

Parameters:
- `input`: The array to be sorted.

Return Value: The sorted array.

Usage Example:

```javascript
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

const inputArray = [5, 2, 4, 6, 1, 3];
mergeSort(inputArray);

console.log(inputArray); // [1, 2, 3, 4, 5, 6]
```

## Time Complexity

The Merge Sort algorithm has a time complexity of O(n log n) in all cases. This means that the running time increases proportionally to the size of the input array, multiplied by the logarithm of the size of the input array.

## Space Complexity

The Merge Sort algorithm has a space complexity of O(n) due to the additional space required to create temporary arrays during the merge process. The space complexity is linear and grows proportionally with the size of the input array.


## Tests

There are no specific tests provided in the code sample. However, you can test the `mergeSort` function by passing different arrays and verifying the sorted output.

## UML

The UML diagram represents the flow of the Merge Sort algorithm in the code.

![UML Diagram](![Alt text](<../assets/CC 27.png>))

## License

This project is licensed under the [MIT License](LICENSE).

## Collaboration

Thanks to Reece, Ike, Ryan for the assist
Thanks to chatgpt for helping with the testing.
