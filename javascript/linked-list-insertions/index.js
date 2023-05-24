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
  // Insert a new node with the given value at the head of the list
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }



  //iteratively traverse linked list
  traversal() {
    let current = this.head;

    while (current) {
      //do the thing
      console.log(current.value);
      current = current.next;
    }
  }

  // Check if a node with the given value exists in the linked list
  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      //  Can also do a one liner no brackets if (currentNode.value === value) return true;
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Return a string representation of the linked list
  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode !== null) {
      string += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    string += 'NULL';
    return string;
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

  static zipLists(list1, list2) {
    // Create a new LinkedList to store the zipped list
    const zippedList = new LinkedList();

    // Check if both lists are empty
    if (list1.head === null && list2.head === null) {
      return zippedList; // Return an empty list
    }


    // Initialize two pointers, current1 and current2, to the heads of list1 and list2, respectively
    let current1 = list1.head;
    let current2 = list2.head;
    // Iterate over both lists until either of the lists reaches the end
    while (current1 !== null && current2 !== null) {
      // Append the value of the current node from list1 to the zippedList
      zippedList.append(current1.value);
      // Append the value of the current node from list2 to the zippedList
      zippedList.append(current2.value);
      // Move the current1 pointer to the next node in list1
      current1 = current1.next;
      // Move the current2 pointer to the next node in list2
      current2 = current2.next;
    }
    // If there are remaining nodes in list1, append them to the zippedList
    while (current1 !== null) {
      zippedList.append(current1.value);
      current1 = current1.next;
    }
    // If there are remaining nodes in list2, append them to the zippedList
    while (current2 !== null) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }
    // Return the zippedList containing the nodes alternated between list1 and list2
    return zippedList;
  }
}

module.exports = { LinkedList, Node };
