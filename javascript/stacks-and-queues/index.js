class Node {
  constructor(value) {
    this.value = value; // Value stored in the node
    this.next = null; // Pointer to the next node
  }
}


class Stack {
  constructor() {
    this.top = null; // Initialize the top of the stack as null (empty stack)
  }

  push(value) {
    let newNode = new Node(value); // Create a new node with the given value
    newNode.next = this.top; // Set the next pointer of the new node to the current top of the stack
    this.top = newNode; // Update the top of the stack to be the new node
  }

  pop() {
    let removedValue = null; // Initialize the removed value as null
    if (this.top) {
      // If the stack is not empty
      removedValue = this.top.value; // Store the value of the top node to be removed
      this.top = this.top.next; // Update the top of the stack to the next node
    }
    return removedValue; // Return the removed value (null if the stack was empty)
  }

  peek() {
    return this.top.value; // Return the value of the node at the top of the stack
  }

  isEmpty() {
    return this.top === null; // Check if the stack is empty by verifying if the top is null
  }
}

class pseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    // Move all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // Push the new value to stack1
    this.stack1.push(value);

    // Move all elements back to stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      throw new Error("PseudoQueue is empty");
    }
    return this.stack1.pop();
  }

  peek() {
    if (this.stack1.isEmpty()) {
      throw new Error("PseudoQueue is empty");
    }
    return this.stack1.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }
}

module.exports = { Node, pseudoQueue };
