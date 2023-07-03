'use strict';

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
}

module.exports = Graph;
