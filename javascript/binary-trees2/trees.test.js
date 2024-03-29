const { BinaryTree, Node } = require('./index.js');

function runTests() {
  describe('Binary Tree Tests', () => {
    // Test 1: Can successfully instantiate an empty tree
    it('should instantiate an empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.root).toBeNull();
    });

    // Test 2: Can successfully instantiate a tree with a single root node
    it('should instantiate a tree with a single root node', () => {
      const tree = new BinaryTree();
      const rootNode = new Node(5);
      tree.root = rootNode;
      expect(tree.root).not.toBeNull();
      expect(tree.root.value).toBe(5);
    });

    // Test 3: For a Binary Search Tree, can successfully add a left child and right child properly to a node
    it('should add left and right child nodes properly', () => {
      const tree = new BinaryTree();
      const rootNode = new Node(5);
      const leftNode = new Node(3);
      const rightNode = new Node(7);
      rootNode.children.push(leftNode, rightNode);
      tree.root = rootNode;
      expect(tree.root).not.toBeNull();
      expect(tree.root.value).toBe(5);
      expect(tree.root.children.length).toBe(2);
      expect(tree.root.children[0]).toBe(leftNode);
      expect(tree.root.children[1]).toBe(rightNode);
    });

    // Test 4: Can successfully create a FizzBuzz tree from a binary tree
    it('should create a FizzBuzz tree from a binary tree', () => {
      const tree = new BinaryTree();
      const rootNode = new Node(5);
      const leftNode = new Node(3);
      const rightNode = new Node(7);
      const leftLeftNode = new Node(2);
      const leftRightNode = new Node(4);
      const rightLeftNode = new Node(6);
      const rightRightNode = new Node(15);
      rootNode.children.push(leftNode, rightNode);
      leftNode.children.push(leftLeftNode, leftRightNode);
      rightNode.children.push(rightLeftNode, rightRightNode);
      tree.root = rootNode;

      const fizzBuzzTreeRoot = tree.fizzBuzzTree(tree.root);
      expect(fizzBuzzTreeRoot).not.toBeNull();
      expect(fizzBuzzTreeRoot.value).toBe("Buzz");
      expect(fizzBuzzTreeRoot.children.length).toBe(2);
      expect(fizzBuzzTreeRoot.children[0].value).toBe("Fizz");
      expect(fizzBuzzTreeRoot.children[1].value).toBe("Buzz");
      expect(fizzBuzzTreeRoot.children[0].children[0].value).toBe("2");
      expect(fizzBuzzTreeRoot.children[0].children[1].value).toBe("4");
      expect(fizzBuzzTreeRoot.children[1].children[0].value).toBe("Fizz");
      expect(fizzBuzzTreeRoot.children[1].children[1].value).toBe("FizzBuzz");
    });
  });
}

runTests();
