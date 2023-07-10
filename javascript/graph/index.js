'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight=0){
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    if (!this.adjacencyList.has(value)) {
      this.adjacencyList.set(value, []);
    }
    return value;
  }

  addEdge(node1, node2, weight = null) {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      this.adjacencyList.get(node1).push({ node: node2, weight });
      this.adjacencyList.get(node2).push({ node: node1, weight });
    }
  }

  getNodes() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(node) {
    if (this.adjacencyList.has(node)) {
      return this.adjacencyList.get(node);
    }
    return [];
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(startNode) {
    const visited = new Set();
    const queue = [];
    visited.add(startNode);
    queue.push(startNode);
    const visitedOrder = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      visitedOrder.push(currentNode);

      for (const neighbor of currentNode.adjacentNodes) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return visitedOrder;
  }

  // TODO ALTERNATE SOLUTION
  // breadthFirst(root, callback){
  //   const queue = [root];
  //   const visited = new Set();
  //   visited.add(root);
  //   let current = null;

  //   while(queue.length){
  //     // the first time, we pop the vertex
  //     current = queue.pop();

  //     // if a callback exists, we use it to "do the thing"
  //     if(callback){
  //       callback(current.value);
  //     }

  //     // grab neighbor(s) if it exists
  //     const neighbors = this.getNeighbors(current); 
  //     // if this was the array: ['a', 'b', 'c']
  //     // "for edge of" would equal 'a', the element
  //     // whereas "for edge in" would equal 0, the index
  //     for(let edge of neighbors){
  //       // if we haven't visited the node, 
  //       if(!visited.has(edge.vertex)){
  //         // we add the vertex to the visited set to avoid duplication
  //         visited.add(edge.vertex);
  //         // THEN we insert the vertex into the proper end of the queue
  //         queue.unshift(edge.vertex);
  //       }
  //     }
  //   }
  //   return visited;
  // }

  depthFirst(root, callback){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      // the first time, we pop the vertex
      current = stack.pop();

      // if a callback exists, we use it to "do the thing"
      if(callback){
        callback(current.value);
      }

      // grab neighbor(s) if it exists
      const neighbors = this.getNeighbors(current); 
      // if this was the array: ['a', 'b', 'c']
      // "for edge of" would equal 'a', the element
      // whereas "for edge in" would equal 0, the index
      for(let edge of neighbors){
        // if we haven't visited the node, 
        if(!visited.has(edge.vertex)){
          // we add the vertex to the visited set to avoid duplication
          visited.add(edge.vertex);
          // THEN we insert the vertex into the proper end of the stack
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }

}

module.exports = Graph, Vertex, Edge;
