class RepeatedWordFinder {
  findFirstRepeatedWord(inputString) {
    // Convert input string to lowercase and remove punctuation marks
    const processedString = inputString.toLowerCase().replace(/[^\w\s]/g, '');

    // Split the string into individual words
    const words = processedString.split(' ');

    // If the string is empty or contains only whitespace, return null
    if (words.length === 0 || words.every((word) => word === '')) {
      return null;
    }

    // Initialize an empty hashmap to keep track of word frequencies
    const wordFrequency = new Map();

    for (const word of words) {
      // Increment the frequency of the word in the hashmap
      const frequency = wordFrequency.get(word) || 0;
      wordFrequency.set(word, frequency + 1);

      // If the word frequency becomes 2, it's the first repeated word
      if (frequency + 1 === 2) {
        return word;
      }
    }

    // No repeated words found
    return null;
  }
}

module.exports = RepeatedWordFinder;
