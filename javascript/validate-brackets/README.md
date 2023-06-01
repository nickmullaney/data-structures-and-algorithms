# Bracket Validator

This class provides a function called validateBrackets that checks if the brackets in a given string are balanced.

## BracketValidator Class
This class represents a bracket validator and provides the following methods:

## Constructor
Creates a new instance of the BracketValidator class.

Initializes the stack property as an empty array.
Defines the openingBrackets property as an array of opening brackets.
Defines the closingBrackets property as an array of corresponding closing brackets.

## validateBrackets(string)
Arguments: string

Returns: A boolean representing whether or not the brackets in the string are balanced.

Iterates over each character in the given string.
If the character is an opening bracket, pushes it onto the stack.
If the character is a closing bracket, checks if the stack is empty.
If the stack is empty, returns false as brackets are unbalanced.
If the stack is not empty, pops the top opening bracket from the stack and compares it with the current closing bracket.
If the opening and closing brackets match, continues to the next character.
If the opening and closing brackets do not match, returns false as brackets are unbalanced.
After iterating over all characters, checks if there are any remaining opening brackets on the stack.
If the stack is empty, returns true as brackets are balanced.
If the stack is not empty, returns false as brackets are unbalanced.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts of the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Be sure to follow your language/framework's standard naming conventions (e.g., C# uses PascalCasing for all method and class names).

Any exceptions or errors that come from your code should be contextual, descriptive, and capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong when calling the methods you wrote for this lab.

## Approach & Efficiency
Explain the approach and efficiency of the validateBrackets function and any additional methods in the BracketValidator class.

## Whiteboard Process
  Code Challenge 11
[image](../assets/CC%2013%20UML.png)

## Solution
Code Challenge 11
[image](../assets/CC%2013%20Tests.png)

## Collaboration
Thanks to Tim Maupin for the collaboration.

Thanks to chatgpt for helping with the testing.

#### prompts

Using the below code as my standard, can you help make a series of tests that match the following asks for my code for BracketValidator

Write tests to prove the following functionality:

* should return true for balanced brackets
  * Test case: (){}[]
  * Test case: {[()]()}
  * Test case: [{()}]

* should return false for unbalanced brackets
  * Test case: {[()]}(
  * Test case: {[()]}}
  * Test case: [{)]

* should return false for mismatched brackets
  * Test case: {[()]})
  * Test case: [({)]
  * Test case: [[))

* should return true for an empty string
  * Test case: ''

* should return true for strings without brackets
  * Test case: 'Hello, World!'
  * Test case: '12345'