# Challenge Title

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

### Node
  Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.


### Stack
  Create a Stack class that has a top property. It creates an empty Stack when instantiated.

  This object should be aware of a default empty value assigned to top when the stack is created.

  The class should contain the following methods:

  #### push
  
  Arguments: value

  adds a new node with that value to the top of the stack with an O(1) Time performance.

  #### pop

  Arguments: none

  Returns: the value from node from the top of the stack

  Removes the node from the top of the stack
  
  Should raise exception when called on empty stack

  #### peek
  
  Arguments: none
  
  Returns: Value of the node located at the top of the stack
  
  Should raise exception when called on empty stack

  #### is empty

  Arguments: none

  Returns: Boolean indicating whether or not the stack is empty.

  ### Queue
  
  Create a Queue class that has a front property. It creates an empty Queue when instantiated.

  This object should be aware of a default empty value assigned to front when the queue is created.

  The class should contain the following methods:

  #### enqueue

  Arguments: value
  
  adds a new node with that value to the back of the queue with an O(1) Time performance.

  #### dequeue
  
  Arguments: none

  Returns: the value from node from the front of the queue
  
  Removes the node from the front of the queue
  
  Should raise exception when called on empty queue

  #### peek

  Arguments: none

  Returns: Value of the node located at the front of the queue

  Should raise exception when called on empty stack

  #### is empty

  Arguments: none

  Returns: Boolean indicating whether or not the queue is empty

  You have access to the Node class and all the properties on the Linked List class.

### Structure and Testing

  Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

  Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

  Any exceptions or errors that come from your code should be contextual, descriptive, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong in calling the methods you wrote for this lab.

  Write tests to prove the following functionality:

* Can successfully push onto a stack
* Can successfully push multiple values onto a stack
* Can successfully pop off the stack
* Can successfully empty a stack after multiple pops
* Can successfully peek the next item on the stack
* Can successfully instantiate an empty stack
* Calling pop or peek on empty stack raises exception
* Can successfully enqueue into a queue
* Can successfully enqueue multiple values into a queue
* Can successfully dequeue out of a queue the expected value
* Can successfully peek into a queue, seeing the expected value
* Can successfully empty a queue after multiple dequeues
* Can successfully instantiate an empty queue
* Calling dequeue or peek on empty queue raises exception
* Ensure your tests are passing before you submit your solution.

## Whiteboard Process
  Code Challenge 10
[image](../assets/stacks%20and%20queues.png)

## Approach & Efficiency

I took the approach of following along with this one and watching some videos on the side to better grasp stacks and queues. I focused on what we learned in class and used it to finish out the project.

## Solution
Code Challenge 10
[image](../assets/stacks%20and%20queues%20test.png)

## Collaboration

Thanks to Ryan Gallaway for covering this code in class today

Thanks to chatgpt for helping with the testing 



prompts

Using the below code as my standard, can you help make a series of tests that match the following asks for my new stacks and queues classes|

Write tests to prove the following functionality:

Can successfully push onto a stack
Can successfully push multiple values onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Can successfully instantiate an empty stack
Calling pop or peek on empty stack raises exception
Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue
Calling dequeue or peek on empty queue raises exception

```
const { LinkedList } = require('./index');

describe('Linked List', () => {
  it('should successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next).toBe(null);
  });


  it('should successfully add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.append('c');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });

  it('should successfully append a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('c');
    linkedList.insertBefore('c', 'b');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });

  it('should successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('b');
    linkedList.append('c');
    linkedList.insertBefore('b', 'a');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });

  it('should not insert a node before the head when the linked list is empty', () => {
    const linkedList = new LinkedList();
    linkedList.insertBefore('b', 'a');
    expect(linkedList.head).toBe(null);
  });

  it('should successfully insert after a node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('c');
    linkedList.insertAfter('a', 'b');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });

  it('should successfully insert a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.insertAfter('b', 'c');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });

  it('should not insert a node after the head when the linked list is empty', () => {
    const linkedList = new LinkedList();
    linkedList.insertAfter('a', 'b');
    expect(linkedList.head).toBe(null);
  });

  it('should return null for k greater than the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);

    const result = linkedList.kthFromEnd(5);
    expect(result).toBeNull();
  });

  it('should return null for k equal to the length of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);

    const result = linkedList.kthFromEnd(2);
    expect(result).toBeNull();
  });

  it('should return null for k not being a positive integer', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
  
    const result = linkedList.kthFromEnd(-1);
    expect(result).toBeNull();
  });
  

  it('should return the value of the only node in the linked list when k is 0 and list size is 1', () => {
    const linkedList = new LinkedList();
    linkedList.append(5);

    const result = linkedList.kthFromEnd(0);
    expect(result).toBe(5);
  });

  it('should return the value of the node at the specified position when k is somewhere in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(8);
    linkedList.append(2);
    linkedList.append(6);

    const result = linkedList.kthFromEnd(2);
    expect(result).toBe(8);
  });

  it('should return the value of the last node in the linked list when k is 0', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(8);
    linkedList.append(2);

    const result = linkedList.kthFromEnd(0);
    expect(result).toBe(2);
  });

  // ------------------------------Zipped Lists----------------------------------------------------

  it('should zip two empty lists and return an empty list', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const result = LinkedList.zipLists(list1, list2);

    expect(result.head).toBeNull();
  });

  it('should zip an empty list with a non-empty list and return the non-empty list', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.append(1);
    list2.append(2);
    list2.append(3);

    const result = LinkedList.zipLists(list1, list2);

    expect(result.head.value).toBe(1);
    expect(result.head.next.value).toBe(2);
    expect(result.head.next.next.value).toBe(3);
    expect(result.head.next.next.next).toBeNull();
  });

  it('should zip two lists of equal length and alternate their nodes', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    list2.append(6);

    const result = LinkedList.zipLists(list1, list2);

    expect(result.head.value).toBe(1);
    expect(result.head.next.value).toBe(2);
    expect(result.head.next.next.value).toBe(3);
    expect(result.head.next.next.next.value).toBe(4);
    expect(result.head.next.next.next.next.value).toBe(5);
    expect(result.head.next.next.next.next.next.value).toBe(6);
    expect(result.head.next.next.next.next.next.next).toBeNull();
  });

  it('should zip two lists of different lengths and append the remaining nodes', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list2.append(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);
    list2.append(10);

    const result = LinkedList.zipLists(list1, list2);

    expect(result.head.value).toBe(1);
    expect(result.head.next.value).toBe(2);
    expect(result.head.next.next.value).toBe(3);
    expect(result.head.next.next.next.value).toBe(4);
    expect(result.head.next.next.next.next.value).toBe(6);
    expect(result.head.next.next.next.next.next.value).toBe(8);
    expect(result.head.next.next.next.next.next.next.value).toBe(10);
    expect(result.head.next.next.next.next.next.next.next).toBeNull();
  });
});

```
