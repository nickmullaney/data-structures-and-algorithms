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

class Queue {
  constructor() {
    this.front = null; // Initialize the front of the queue as null (empty queue)
    this.back = null; // Initialize the back of the queue as null (empty queue)
  }

  enqueue(value) {
    let newNode = new Node(value); // Create a new node with the given value
    if (this.front) {
      // If the queue is not empty
      this.back.next = newNode; // Set the next pointer of the current back node to the new node
    } else {
      this.front = newNode; // If the queue is empty, set the front to the new node
    }
    this.back = newNode; // Update the back of the queue to be the new node
  }

  dequeue() {
    if (!this.front) {
      // If the queue is empty
      throw new Error("Queue is empty");
    }

    let removedValue = this.front.value; // Store the value of the front node to be removed

    if (this.front === this.back) {
      // If there was only one node in the Queue, we need to make back null
      this.back = null;
    }

    this.front = this.front.next; // Update the front of the queue to the next node

    return removedValue; // Return the removed value
  }

  peek() {
    if (!this.front) {
      // If the queue is empty
      throw new Error("Queue is empty");
    }

    return this.front.value; // Return the value of the node at the front of the queue
  }

  isEmpty() {
    return this.front === null; // Check if the queue is empty by verifying if the front is null
  }
}



module.exports = { Node, Queue, Stack};
