class BracketValidator {
  constructor() {
    this.stack = []; // Stack to store opening brackets
    this.openingBrackets = ['(', '[', '{']; // Array of opening brackets
    this.closingBrackets = [')', ']', '}']; // Array of corresponding closing brackets
  }

  validateBrackets(string) {
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (this.openingBrackets.includes(char)) { // If the character is an opening bracket
        this.stack.push(char); // Push it onto the stack
      } else if (this.closingBrackets.includes(char)) { // If the character is a closing bracket
        if (this.stack.length === 0) { // If there are no opening brackets on the stack
          return false; // Brackets are unbalanced
        }

        const top = this.stack.pop(); // Pop the top opening bracket from the stack
        const openingBracket = this.openingBrackets[this.closingBrackets.indexOf(char)]; // Find the corresponding opening bracket
        if (top !== openingBracket) { // If the popped opening bracket doesn't match the current closing bracket
          return false; // Brackets are unbalanced
        }
      }
    }

    return this.stack.length === 0; // If there are no remaining opening brackets on the stack, brackets are balanced
  }
}

module.exports = {BracketValidator};
