const { BinarySearchTree } = require('./index.js');

function runTests() {
  describe('Binary Search Tree Tests', () => {
    // Test 1: Can successfully instantiate an empty tree
    it('should instantiate an empty tree', () => {
      const tree = new BinarySearchTree();
      expect(tree.root).toBeNull();
    });

    // Test 2: Can successfully instantiate a tree with a single root node
    it('should instantiate a tree with a single root node', () => {
      const tree = new BinarySearchTree();
      tree.add(5);
      expect(tree.root).not.toBeNull();
      expect(tree.root.value).toBe(5);
    });

    // Test 3: For a Binary Search Tree, can successfully add a left child and right child properly to a node
    it('should add left and right child nodes properly', () => {
      const tree = new BinarySearchTree();
      tree.add(5);
      tree.add(3);
      tree.add(7);
      expect(tree.root).not.toBeNull();
      expect(tree.root.value).toBe(5);
      expect(tree.root.left).not.toBeNull();
      expect(tree.root.left.value).toBe(3);
      expect(tree.root.right).not.toBeNull();
      expect(tree.root.right.value).toBe(7);
    });

    // Test 4: Can successfully return a collection from a pre-order traversal
    it('should return a collection from a pre-order traversal', () => {
      const tree = new BinarySearchTree();
      tree.add(5);
      tree.add(3);
      tree.add(7);
      tree.add(2);
      tree.add(4);
      tree.add(6);
      tree.add(8);
      const result = tree.preorderTraversal();
      expect(result).toEqual([5, 3, 2, 4, 7, 6, 8]);
    });

    // Test 5: Can successfully return a collection from an in-order traversal
    it('should return a collection from an in-order traversal', () => {
      const tree = new BinarySearchTree();
      tree.add(5);
      tree.add(3);
      tree.add(7);
      tree.add(2);
      tree.add(4);
      tree.add(6);
      tree.add(8);
      const result = tree.inorderTraversal();
      expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });

    // Test 6: Can successfully return a collection from a post-order traversal
    it('should return a collection from a post-order traversal', () => {
      const tree = new BinarySearchTree();
      tree.add(5);
      tree.add(3);
      tree.add(7);
      tree.add(2);
      tree.add(4);
      tree.add(6);
      tree.add(8);
      const result = tree.postorderTraversal();
      expect(result).toEqual([2, 4, 3, 6, 8, 7, 5]);
    });

    // Test 7: Returns true/false for the contains method, given an existing or non-existing node value
    it('should return true/false for the contains method', () => {
      const tree = new BinarySearchTree();
      tree.add(5);
      tree.add(3);
      tree.add(7);
      expect(tree.contains(3)).toBe(true);
      expect(tree.contains(7)).toBe(true);
      expect(tree.contains(9)).toBe(false);
    });
  });
}

runTests();
