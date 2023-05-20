

const { LinkedList, Node } = require('./index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBe(null);
  });

  it('should insert a node to the head of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    expect(linkedList.head).toBeInstanceOf(Node);
    expect(linkedList.head.value).toEqual('c');
    expect(linkedList.head.next).toBe(null);
  });

  it('should properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });
  it('should append a node to an empty linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next).toBe(null);
  });

  it('should append a node to the end of a non-empty linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.append('c');
    expect(linkedList.head.value).toBe('b');
    expect(linkedList.head.next.value).toBe('a');
    expect(linkedList.head.next.next.value).toBe('c');
    expect(linkedList.head.next.next.next).toBe(null);
  });

  it('should append a node to the end of a linked list with a single node', () => {
    const linkedList = new LinkedList();
    linkedList.head = new Node('a');
    linkedList.append('b');
    expect(linkedList.head.value).toBe('a');
    expect(linkedList.head.next.value).toBe('b');
    expect(linkedList.head.next.next).toBe(null);
  });
  
  it('should return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.includes('b')).toBe(true);
  });

  it('should return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.includes('d')).toBe(false);
  });

  it('should properly return a collection of all the values in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });
});
