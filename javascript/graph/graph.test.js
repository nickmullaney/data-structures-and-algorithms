const Graph = require('./');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Node can be successfully added to the graph', () => {
    graph.addNode('A');
    graph.addNode('B');

    expect(graph.size()).toBe(2);
    expect(graph.getNodes()).toEqual(expect.arrayContaining(['A', 'B']));
  });

  test('An edge can be successfully added to the graph', () => {
    const node1 = graph.addNode('A');
    const node2 = graph.addNode('B');

    graph.addEdge(node1, node2, 10);

    const neighbors = graph.getNeighbors(node1);
    expect(neighbors).toHaveLength(1);
    expect(neighbors[0].node).toBe(node2);
    expect(neighbors[0].weight).toBe(10);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    const nodes = graph.getNodes();
    expect(nodes).toEqual(expect.arrayContaining(['A', 'B', 'C']));
    expect(nodes).toHaveLength(3);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const node1 = graph.addNode('A');
    const node2 = graph.addNode('B');
    const node3 = graph.addNode('C');

    graph.addEdge(node1, node2, 10);
    graph.addEdge(node1, node3, 5);

    const neighbors = graph.getNeighbors(node1);
    expect(neighbors).toHaveLength(2);
    expect(neighbors).toEqual(expect.arrayContaining([
      { node: node2, weight: 10 },
      { node: node3, weight: 5 },
    ]));
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const node1 = graph.addNode('A');
    const node2 = graph.addNode('B');

    graph.addEdge(node1, node2, 7);

    const neighbors = graph.getNeighbors(node1);
    expect(neighbors[0].weight).toBe(7);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');

    expect(graph.size()).toBe(3);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    const node1 = graph.addNode('A');
    const node2 = graph.addNode('B');

    graph.addEdge(node1, node2, 10);

    const nodes = graph.getNodes();
    expect(nodes).toEqual(expect.arrayContaining(['A', 'B']));
    expect(nodes).toHaveLength(2);

    const neighbors = graph.getNeighbors(node1);
    expect(neighbors).toHaveLength(1);
    expect(neighbors[0].node).toBe(node2);
    expect(neighbors[0].weight).toBe(10);
  });
});
