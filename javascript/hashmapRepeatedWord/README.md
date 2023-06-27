# Repeated Word Finder

## Author: Nick Mullaney

The `RepeatedWordFinder` class provides a method called `findFirstRepeatedWord` that finds the first word to occur more than once in a given string.

### UML

![Hashmap Repeated Word UML](<../assets/cc 31.png>)

### `findFirstRepeatedWord(inputString)`

Description: Finds the first word to occur more than once in the given string.

Parameters:
- `inputString`: The string in which to search for repeated words.

Return Value:
- Returns the first word to occur more than once in the string.
- If no repeated words are found, it returns `null`.

## Approach

The `findFirstRepeatedWord` method processes the input string by converting it to lowercase and removing punctuation marks. It then splits the processed string into individual words. If the string is empty or contains only whitespace, it returns `null`.

The method uses a hashmap (`wordFrequency`) to keep track of word frequencies. It iterates through the words, increments the frequency in the hashmap, and checks if the frequency becomes 2. If a word is found with a frequency of 2, it is considered the first repeated word, and it is returned. If no repeated words are found, it returns `null`.

## Time Complexity

The time complexity of the `findFirstRepeatedWord` method is O(N), where N is the number of words in the input string. It iterates through the words once and performs hashmap operations in constant time.

## Space Complexity

The space complexity of the `findFirstRepeatedWord` method is O(N), where N is the number of words in the input string. It uses additional space to store the words and the hashmap.

## Testing

To test the functionality of the `RepeatedWordFinder` class and the `findFirstRepeatedWord` method, you can write tests similar to the following:

```javascript
const RepeatedWordFinder = require('./RepeatedWordFinder');

const finder = new RepeatedWordFinder();

console.log(finder.findFirstRepeatedWord('Once upon a time, there was a brave princess who...'));
// Expected output: 'a'

console.log(finder.findFirstRepeatedWord('Hello world'));
// Expected output: null

console.log(finder.findFirstRepeatedWord('This is a test test'));
// Expected output: 'test'
```

## License

This project is licensed under the [MIT License](LICENSE).

## Collaboration

Thanks to Chatgpt for testing assiszt