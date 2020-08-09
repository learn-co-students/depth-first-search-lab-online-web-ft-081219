function depthFirstSearch(rootNode, vertices, edges){
  const store = [];
  store.push(rootNode);
  const visited = [rootNode];

  while(store.length > 0){
    const vertice = store.pop();

    if(!vertice.discovered){
      vertice.discovered = true;
      const adjacentVertices = findAdjacent(vertice.name, vertices, edges);

      adjacentVertices.forEach(vert => {
        visited.push(vert);
        store.push(vert);
      });
    };
  };
 return visited;
};


function findAdjacent(verticeName, vertices, edges){
  const adjacentNames = edges.filter(edge => {
    return edge.includes(verticeName);
  }).map(edge => {
    return edge.find(name => name != verticeName);
  });

  return vertices.filter(vertice => adjacentNames.includes(vertice.name) && !vertice.discovered);
};
