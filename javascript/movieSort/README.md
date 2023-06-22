# Sorting Comparisons

## Author: Nick Mullaney

The `sortTitle` and `sortYear` functions are used to sort an array of movies by title and year, respectively.

### `sortTitle(arr)`

Description: Sorts an array of movies by title, ignoring certain words like "the", "an", and "a".

Parameters:
- `arr`: The array of movies to be sorted.

Return Value: None. The `arr` array is sorted in-place.

### `sortYear(arr)`

Description: Sorts an array of movies by year in descending order.

Parameters:
- `arr`: The array of movies to be sorted.

Return Value: None. The `arr` array is sorted in-place.

## Time Complexity

The time complexity of `sortTitle` and `sortYear` depends on the underlying sorting algorithm used. In this case, the functions use the `compareTitle` and `compareYear` callback functions to compare movies and determine their order. The time complexity of the sorting algorithms can be determined based on the chosen algorithm.

## Space Complexity

The space complexity of `sortTitle` and `sortYear` depends on the underlying sorting algorithm used. In general, the space complexity of sorting algorithms can vary, but it often involves creating temporary variables or arrays to facilitate the sorting process. The space complexity is determined by the chosen algorithm.

## Tests

The following tests can be used to verify the functionality of the sorting functions:

- Test sorting movies by title:
  ```javascript
  const movies = [
    { title: "Beetlejuice", year: 1988 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "Crocodile Dundee", year: 1986 },
  ];
  sortTitle(movies);
   Expected output: [
     { title: "Beetlejuice", year: 1988 },
     { title: "Crocodile Dundee", year: 1986 },
     { title: "The Shawshank Redemption", year: 1994 },
   ]

  ```

- Test sorting movies by year:
  ```javascript
  const movies = [
    { title: "Beetlejuice", year: 1988 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "Crocodile Dundee", year: 1986 },
  ];
  sortYear(movies);
  // Expected output: [
  //   { title: "The Shawshank Redemption", year: 1994 },
  //   { title: "Beetlejuice", year: 1988 },
  //   { title: "Crocodile Dundee", year: 1986 },
  // ]
  ```

## Testing

To run tests use `npm test sort.test.js`

## UML

No UML diagram is provided for the code.

## License

This project is licensed under the [MIT License](LICENSE).

## Collaboration

Thanks to Reece, Ike, Kaeden and Ryan for their assistance.

