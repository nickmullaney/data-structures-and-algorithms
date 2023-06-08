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

    // Test 3: For a Binary Tree, can successfully add left and right child properly to a node
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

      const fizzBuzzTree = fizzBuzzTree(tree.root);

      expect(fizzBuzzTree).not.toBeNull();
      expect(fizzBuzzTree.value).toBe("Buzz");
      expect(fizzBuzzTree.children.length).toBe(2);
      expect(fizzBuzzTree.children[0].value).toBe("Fizz");
      expect(fizzBuzzTree.children[1].value).toBe("7");
      expect(fizzBuzzTree.children[0].children.length).toBe(2);
      expect(fizzBuzzTree.children[0].children[0].value).toBe("2");
      expect(fizzBuzzTree.children[0].children[1].value).toBe("4");
      expect(fizzBuzzTree.children[1].children.length).toBe(2);
      expect(fizzBuzzTree.children[1].children[0].value).toBe("Fizz");
      expect(fizzBuzzTree.children[1].children[1].value).toBe("FizzBuzz");
    });
  });
}

runTests();
