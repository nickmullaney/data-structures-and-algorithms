# Breadth First Traversal

## Description

The `breadthFirst` function implements a breadth-first traversal on a tree. It takes a tree as input and returns a list of all values encountered during the traversal, in the order they were encountered. The function traverses the tree in a breadth-first approach, visiting all nodes at each level before moving to the next level.

## `breadthFirst` Function

### Parameters

- `tree`: The tree to be traversed.

### Return Value

- A list of values encountered during the breadth-first traversal of the tree.

### Example Usage

```javascript
const tree = /* Create or obtain a tree */;
const result = breadthFirst(tree);
console.log(result); // Output: [5, 3, 7, 2, 4, 6, 8]
```

## Whiteboard Process

![Alt text](../assets/Code%20Challenge%2017.png)


## Approach & Efficiency

The `breadthFirst` function uses a queue data structure to perform the breadth-first traversal. It starts by enqueuing the root node of the tree. Then, in each iteration, it dequeues a node, adds its value to the result list, and enqueues its children (if any) from left to right. This process continues until the queue is empty, ensuring that the nodes are visited in a breadth-first manner.

The time complexity of the `breadthFirst` function is O(n), where n is the total number of nodes in the tree. This is because the function needs to visit each node once during the traversal.

The space complexity of the function is O(m), where m is the maximum number of nodes at any level of the tree. This is because the queue data structure is used to store the nodes at each level. In the worst case, the queue can hold all the nodes at the maximum level, resulting in a space complexity proportional to the number of nodes at that level.

It's important to note that the space complexity can vary depending on the shape and size of the tree. In a well-balanced tree, where each level is filled with nodes, the maximum number of nodes at any level is approximately half of the total number of nodes. Therefore, in such cases, the space complexity can be approximated as O(n/2), which simplifies to O(n) asymptotically.

## Testing

To test the functionality of the `breadthFirst` function, the following test cases can be used:

### Test 1: Traversing a tree with multiple levels

```javascript
const tree = /* Create or obtain a tree */;
const result = breadthFirst(tree);
expect(result).toEqual([5, 3, 7, 2, 4, 6, 8]);
```

### Test 2: Traversing an empty tree

```javascript
const tree = null;
const result = breadthFirst(tree);
expect(result).toEqual([]);
```

### Test 3: Traversing a tree with a single node

```javascript
const tree = { value: 5, left: null, right: null };
const result = breadthFirst(tree);
expect(result).toEqual([5]);
```

### Test 4: Traversing a tree with only left children

```javascript
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: null,
};
const result = breadthFirst(tree);
expect(result).toEqual([1, 2, 3]);
```

## Collaboration

Thanks to chatgpt for helping with the testing.