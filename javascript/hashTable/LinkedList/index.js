'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(value) {
    const newNode = { value, next: null };

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  find(callback) {
    let currentNode = this.head;

    while (currentNode) {
      if (callback(currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
  // adds a node to the FRONT of a linked list
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // adds a node to the END of a linked list 
  append(value){
    let node = new Node(value);
    // if the head is null, we need to assign this new to the head as well
    if(!this.head){
      // in other words, if the list was empty, do this and done
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;

  }

  // iteratively traverse linked list and do a thing 
  traversal(){
    let current = this.head;

    while(current){
      // do the thing
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value){
    let current = this.head;
    while(current){
      // shorthand one liner
      if(current.value === value) return true;
      // another way - maybe the way you are used to seeing
      // if(current.value === value) {
      //   return true
      // };

      current = current.next;
    }
    return false;
  }

  toString(){
    let result = '';
    let current = this.head;
    // goal:  "{ a } -> { b } -> { c } -> NULL"
    while(current){
      result += `{ ${current.value} } -> `;
      current = current.next;
    }

    result += 'NULL';

    return result;
  }

  insertBefore(value, newValue){
    if(!this.head) throw new Error('Linked list is Empty');
    if(!this.head.value === value)this.insert(value);
    if(!this.includes(value)) throw new Error('value not found');

    let current = this.head;
    while(current){
      // do the thing
      if(current.next && current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
      } else {
        current = current.next;
      }
    }

  }

}

let list  = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

console.log('includes works: ', list.includes('banana'));

list.insertBefore('c', 1);
console.log(list.toString());


module.exports = LinkedList;
