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

  it('should successfully insert a node before a node located in the middle of a linked list', () => {
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
});
