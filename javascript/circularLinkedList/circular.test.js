// linkedListUtils.test.js

const { isLinkedListCircular } = require('./linkedListUtils');

describe('isLinkedListCircular', () => {
  // Test case 1: Non-circular linked list
  test('should return false for a non-circular linked list', () => {
    const linkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };

    expect(isLinkedListCircular(linkedList)).toBe(false);
  });

  // Test case 2: Circular linked list
  test('should return true for a circular linked list', () => {
    const linkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null
        }
      }
    };

    linkedList.next.next.next = linkedList; // Creating a cycle

    expect(isLinkedListCircular(linkedList)).toBe(true);
  });

  // Test case 3: Empty linked list
  test('should return false for an empty linked list', () => {
    const linkedList = null;

    expect(isLinkedListCircular(linkedList)).toBe(false);
  });

  // Test case 4: Linked list with a single node
  test('should return false for a linked list with a single node', () => {
    const linkedList = {
      value: 1,
      next: null
    };

    expect(isLinkedListCircular(linkedList)).toBe(false);
  });
});
