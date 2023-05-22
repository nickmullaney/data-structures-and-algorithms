// Node class represents a single node in the linked list
class Node {
  constructor(value) {
    this.value = value; // Value stored in the node
    this.next = null; // Pointer to the next node
  }
}

// LinkedList class represents a linked list
class LinkedList {
  constructor() {
    this.head = null; // Head property points to the first node in the linked list
  }

  // Insert a new node with the given value at the head of the list
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a new node to the End of the linked list
  append(value){
    let node = new Node(value);
    // if the head is null we need to assign this new to the head as well
    if(!this.head){
      // in other words if the list was empty do this and done
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  //iteratively traverse linked list
  traversal(){
    let current = this.head;

    while(current){
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
}

module.exports = {LinkedList, Node,};
