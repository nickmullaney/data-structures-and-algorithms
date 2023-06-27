class MergeSort {
  mergeSort(arr) {
    let n = arr.length;
    if (n > 1) {
      let mid = Math.floor(n / 2);  // Finding the middle index of the array
      let left = arr.slice(0, mid);  // Splitting the array into left subarray
      let right = arr.slice(mid, n);  // Splitting the array into right subarray

      this.mergeSort(left);  // Recursively sorting the left subarray
      this.mergeSort(right);  // Recursively sorting the right subarray

      this.merge(left, right, arr);  // Merging the sorted left and right subarrays
    }
  }

  merge(left, right, arr) {
    let i = 0;  // Index for the left subarray
    let j = 0;  // Index for the right subarray
    let k = 0;  // Index for the merged array

    while (i < left.length && j < right.length) {  // Merge the left and right subarrays into the merged array
      if (left[i] <= right[j]) {
        arr[k] = left[i];  // Copy the current element from the left subarray
        i++;
      } else {
        arr[k] = right[j];  // Copy the current element from the right subarray
        j++;
      }
      k++;
    }

    while (i < left.length) {  // Copy any remaining elements from the left subarray
      arr[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {  // Copy any remaining elements from the right subarray
      arr[k] = right[j];
      j++;
      k++;
    }
  }
}

module.exports = { MergeSort };
