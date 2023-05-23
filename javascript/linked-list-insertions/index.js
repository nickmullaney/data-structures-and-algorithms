class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Appends a new node with the given value to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the linked list is empty, set the new node as the head
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      // Traverse to the last node in the linked list
      current = current.next;
    }

    // Assign the new node as the next node of the last node
    current.next = newNode;
  }

  // Inserts a new node with the given newValue before the first node with the specified value
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      // Empty list, cannot insert before
      return;
    }

    if (this.head.value === value) {
      // If the head node has the specified value, insert the new node at the beginning
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        // Found the node with the specified value, insert the new node before it
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  // Inserts a new node with the given newValue after the first node with the specified value
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    let current = this.head;
    while (current) {
      if (current.value === value) {
        // Found the node with the specified value, insert the new node after it
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }


  kthFromEnd(k) {
    if (k < 0) {
      return null; // k is not a positive integer
    }
    if (!this.head) {
      // Empty list, cannot insert before
      return null;
    }

    let currentValue = this.head;
    let newCurrent = this.head;
    for (let i = 0; i < k; i++) {
      if (!currentValue.next) {
        return null;
      }
      currentValue = currentValue.next;
    }

    while (currentValue.next) {
      currentValue = currentValue.next;
      newCurrent = newCurrent.next;
    }
    return newCurrent.value;
  }
}
module.exports = { LinkedList, Node };
