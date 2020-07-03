function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    stack.push(rootNode)
    const visited = [rootNode]

    while(stack.length > 0){
        const vertice = stack.pop()
        if (!vertice.discovered) {
            vertice.discovered = true
            const adjacentVertices = findAdjacent(vertice.name, vertices, edges)

            adjacentVertices.forEach(v => {
                visited.push(v)
                stack.push(v)
            })
        }
    }
    return visited
}

function findAdjacent(verticeName, vertices, edges){
    let adjacentNames = edges.filter(edge => {
        return edge.includes(verticeName)
    }).map(edge => {
        return edge.find(name => name != verticeName)
    })

    return vertices.filter(vertice => adjacentNames.includes(vertice.name) && !vertice.discovered)
}