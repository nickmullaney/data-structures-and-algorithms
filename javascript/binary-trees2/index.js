class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(tree) {
    if (!tree.root) {
      // If the tree is empty, return an empty array
      return [];
    }

    // Initialize a queue to store nodes and a result array to store values
    const queue = [tree.root];
    const result = [];

    while (queue.length > 0) {
      // Dequeue the first node from the queue
      const node = queue.shift();

      // Add the value of the dequeued node to the result array
      result.push(node.value);

      // Enqueue the left child if it exists
      if (node.left) {
        queue.push(node.left);
      }

      // Enqueue the right child if it exists
      if (node.right) {
        queue.push(node.right);
      }
    }

    // Return the result array containing values encountered in breadth-first order
    return result;
  }


  findMaximumValue() {
    if (!this.root) {
      throw new Error("Binary Tree is empty.");
    }

    let max = this.root.value;

    const traverse = (node) => {
      if (node) {
        if (node.value > max) {
          max = node.value;
        }
        traverse(node.left);
        traverse(node.right);
      }
    };

    traverse(this.root);

    return max;
  }

  preorderTraversal() {
    if (!this.root) {
      return [];
    }
    return this._preorder(this.root);
  }

  _preorder(node) {
    const result = [];
    result.push(node.value);
    if (node.left) {
      result.push(...this._preorder(node.left));
    }
    if (node.right) {
      result.push(...this._preorder(node.right));
    }
    return result;
  }

  inorderTraversal() {
    if (!this.root) {
      return [];
    }
    return this._inorder(this.root);
  }

  _inorder(node) {
    const result = [];
    if (node.left) {
      result.push(...this._inorder(node.left));
    }
    result.push(node.value);
    if (node.right) {
      result.push(...this._inorder(node.right));
    }
    return result;
  }

  postorderTraversal() {
    if (!this.root) {
      return [];
    }
    return this._postorder(this.root);
  }

  _postorder(node) {
    const result = [];
    if (node.left) {
      result.push(...this._postorder(node.left));
    }
    if (node.right) {
      result.push(...this._postorder(node.right));
    }
    result.push(node.value);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this._add(this.root, value);
    }
  }

  _add(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this._add(node.left, value);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this._add(node.right, value);
      }
    }
  }

  contains(value) {
    return this._contains(this.root, value);
  }

  _contains(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._contains(node.left, value);
    } else {
      return this._contains(node.right, value);
    }
  }
}

module.exports = { BinarySearchTree };
