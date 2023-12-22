function dfs(graph, start, visited = new Set()) {

    console.log(start)
    visited.add(start)

    for (let nei of graph[start]) {
        if (!visited.has(nei)) {
            dfs(graph, nei, visited)
        }
    }

}

const graph = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: [],
    d: [],
    e: []
};

dfs(graph, 'a')