const Graph = require('./index');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    // Add test nodes and edges
    const node1 = graph.addNode('A');
    const node2 = graph.addNode('B');
    const node3 = graph.addNode('C');
    graph.addEdge(node1, node2, 10);
    graph.addEdge(node2, node3, 5);
  });

  it('should return all nodes in the graph', () => {
    const nodes = graph.getNodes();
    expect(nodes).toEqual(['A', 'B', 'C']);
  });

  it('should return neighbors of a node', () => {
    const neighbors = graph.getNeighbors('B');
    expect(neighbors).toEqual([
      { node: 'A', weight: 10 },
      { node: 'C', weight: 5 },
    ]);
  });

  it('should return the size of the graph', () => {
    const size = graph.size();
    expect(size).toBe(3);
  });
});
