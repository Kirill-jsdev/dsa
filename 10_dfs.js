function dfs(graph, start) {

    const stack = [start]
    const visited = new Set()

    while (stack.length) {
        
        let curr = stack.pop()
        visited.add(curr)

        console.log(curr)

        for (let nei of graph[curr]) {
            if (!visited.has(nei)) {
                stack.push(nei)
            }
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