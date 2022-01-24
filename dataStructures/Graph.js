class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  removeVertex(vertex) {
    const edges = this.adjacencyList[vertex];

    for (let i = 0; i < edges.length; i++) {
      this.removeEdge(vertex, edges[i]);
    }

    delete this.adjacencyList[vertex];
  }
  DFSRecursive(startVertex) {
    const result = [];
    const visitedVertices = {};
    const adjacencyList = this.adjacencyList;

    (function dfc(vertex) {
      if (!vertex) return null;

      visitedVertices[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visitedVertices[neighbor]) return dfc(neighbor);
      });
    })(startVertex);

    return result;
  }
  DFSIterative(startVertex) {
    // work with last element (because stack) so work with depth
    const stack = [startVertex];
    const result = [];
    const visitedVertices = {};
    let currentVertex;

    visitedVertices[startVertex] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  BFS(startVertex) {
    // work with first element (because queue, so firstly work with next level neighbors)
    const queue = [startVertex];
    const result = [];
    const visitedVertices = {};
    let currentVertex;
    visitedVertices[startVertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
