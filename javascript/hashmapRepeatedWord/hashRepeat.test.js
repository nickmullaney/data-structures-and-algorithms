const RepeatedWordFinder = require('./index');

describe('RepeatedWordFinder', () => {
  let finder;

  beforeEach(() => {
    finder = new RepeatedWordFinder();
  });

  describe('findFirstRepeatedWord', () => {
    test('should return null for an empty string', () => {
      const inputString = '';
      const result = finder.findFirstRepeatedWord(inputString);
      expect(result).toBe(null);
    });

    test('should return null for a string with only whitespace', () => {
      const inputString = '      ';
      const result = finder.findFirstRepeatedWord(inputString);
      expect(result).toBe(null);
    });

    test('should return null if no repeated words are found', () => {
      const inputString = 'This is a test string without repeated words';
      const result = finder.findFirstRepeatedWord(inputString);
      expect(result).toBe(null);
    });

    test('should return the first repeated word', () => {
      const inputString = 'This is a test string with a repeated word test';
      const result = finder.findFirstRepeatedWord(inputString);
      expect(result).toBe('a');
    });

    test('should handle punctuation marks and case sensitivity', () => {
      const inputString = 'This is a test string with Test, and test.';
      const result = finder.findFirstRepeatedWord(inputString);
      expect(result).toBe('test');
    });

    test('should handle different word separators', () => {
      const inputString = 'This|is|a|test|string|with|a|repeated|word|test';
      const result = finder.findFirstRepeatedWord(inputString);
      expect(result).toBe('test');
    });
  });
});
