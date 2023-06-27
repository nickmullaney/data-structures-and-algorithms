class Node {
  constructor(value) {
    this.value = value;
    this.left = null;  // Initialize the left child reference to null
    this.right = null;  // Initialize the right child reference to null
  }
}

class BinaryTree {
  constructor() {
    this.root = null;  // Initialize the root node to null
  }

  findMaximumValue() {
    if (!this.root) {
      throw new Error("Binary Tree is empty.");  // Throw an error if the binary tree is empty
    }

    let max = this.root.value;  // Assume the maximum value is the value of the root node

    const traverse = (node) => {
      if (node) {
        if (node.value > max) {
          max = node.value;  // Update the maximum value if a larger value is found
        }
        traverse(node.left);  // Recursively traverse the left subtree
        traverse(node.right);  // Recursively traverse the right subtree
      }
    };

    traverse(this.root);  // Start the traversal from the root node

    return max;  // Return the maximum value found
  }

  preorderTraversal() {
    if (!this.root) {
      return [];  // If the tree is empty, return an empty array
    }
    return this._preorder(this.root);  // Start the preorder traversal from the root node
  }

  _preorder(node) {
    const result = [];
    result.push(node.value);  // Add the value of the current node to the result array
    if (node.left) {
      result.push(...this._preorder(node.left));  // Recursively traverse the left subtree
    }
    if (node.right) {
      result.push(...this._preorder(node.right));  // Recursively traverse the right subtree
    }
    return result;  // Return the result array
  }

  inorderTraversal() {
    if (!this.root) {
      return [];  // If the tree is empty, return an empty array
    }
    return this._inorder(this.root);  // Start the inorder traversal from the root node
  }

  _inorder(node) {
    const result = [];
    if (node.left) {
      result.push(...this._inorder(node.left));  // Recursively traverse the left subtree
    }
    result.push(node.value);  // Add the value of the current node to the result array
    if (node.right) {
      result.push(...this._inorder(node.right));  // Recursively traverse the right subtree
    }
    return result;  // Return the result array
  }

  postorderTraversal() {
    if (!this.root) {
      return [];  // If the tree is empty, return an empty array
    }
    return this._postorder(this.root);  // Start the postorder traversal from the root node
  }

  _postorder(node) {
    const result = [];
    if (node.left) {
      result.push(...this._postorder(node.left));  // Recursively traverse the left subtree
    }
    if (node.right) {
      result.push(...this._postorder(node.right));  // Recursively traverse the right subtree
    }
    result.push(node.value);  // Add the value of the current node to the result array
    return result;  // Return the result array
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);  // If the tree is empty, create a new node and assign it as the root
    } else {
      this._add(this.root, value);  // Otherwise, call the private add method to insert the value in the appropriate position
    }
  }

  _add(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);  // If the value is less than the current node's value and the left child is null, create a new node and assign it as the left child
      } else {
        this._add(node.left, value);  // Otherwise, recursively call the private add method on the left child
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);  // If the value is greater than the current node's value and the right child is null, create a new node and assign it as the right child
      } else {
        this._add(node.right, value);  // Otherwise, recursively call the private add method on the right child
      }
    }
  }

  contains(value) {
    return this._contains(this.root, value);  // Start the search for a value from the root node
  }

  _contains(node, value) {
    if (node === null) {
      return false;  // If the node is null, the value was not found in the tree
    }

    if (value === node.value) {
      return true;  // If the value matches the value of the current node, return true
    } else if (value < node.value) {
      return this._contains(node.left, value);  // If the value is less than the current node's value, recursively search in the left subtree
    } else {
      return this._contains(node.right, value);  // If the value is greater than the current node's value, recursively search in the right subtree
    }
  }
}

module.exports = { BinarySearchTree };
