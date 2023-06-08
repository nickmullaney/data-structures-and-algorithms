## FizzBuzz Tree

### Author: Nick Mullaney

The `fizzBuzzTree` function takes a binary tree as input and creates a new binary tree where the node values are modified based on the FizzBuzz game rules.

### `fizzBuzzTree(root)`

Description: Creates a new binary tree by applying the FizzBuzz game rules to the node values of the input binary tree.

Parameters:
- `root`: The root node of the binary tree.

Return Value: The root node of the new binary tree with modified node values.

### `processValue(value)`

Description: Processes a value based on the FizzBuzz game rules.

Parameters:
- `value`: The value to be processed.

Return Value: The processed value according to the FizzBuzz game rules.

Usage Example:

```javascript
const { BinaryTree, Node } = require('./path/to/BinaryTree');

const binaryTree = new BinaryTree();
// Build the binary tree by adding nodes

const fizzBuzzTree = binaryTree.fizzBuzzTree(binaryTree.root);
console.log(fizzBuzzTree);

const processedValue = binaryTree.processValue(15);
console.log(processedValue);
```

### UML
![Alt text](../assets/Code%20Challenge%2018.png)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using npm or yarn:

```shell
npm install
```

or

```shell
yarn install
```

## Tests

To run the tests

 for the BinaryTree class and the fizzBuzzTree function, use the following command:

```shell
npm test karytrees.test.js
```


The tests cover various scenarios and ensure the correct behavior of the BinaryTree class and the fizzBuzzTree function.

## License

This project is licensed under the [MIT License](LICENSE).


## Collaboration

Thanks to chatgpt for helping with the testing.