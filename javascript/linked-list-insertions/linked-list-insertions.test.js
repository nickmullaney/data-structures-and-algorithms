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
});
