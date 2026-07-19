/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function (edges, guesses, k) {
    let graph = new Map()
    for (const [u, v] of edges) {
        if (!graph.has(u)) {
            graph.set(u, [])
        }
        if (!graph.has(v)) {
            graph.set(v, [])
        }
        graph.get(u).push(v)
        graph.get(v).push(u)

    }
    let depthMap = new Map()
    let visited = new Set()
    function dfs(at, depth) {
        if (visited.has(at)) return
        depthMap.set(at, depth)
        visited.add(at)
        for (const to of graph.get(at) || []) {
            if (!visited.has(to)) {
                dfs(to, depth + 1)
            }
        }
    }
    dfs(0, 0)
    let guessMap = new Map()
    let guessSet = new Set()
    let root0 = new Set()
    for (const [u, v] of guesses) {
        guessSet.add(`${u}|${v}`)
        let dep_u = depthMap.get(u)
        let dep_v = depthMap.get(v)
        if (dep_u < dep_v) {
            root0.add(`${u}|${v}`)
        }
    }
    guessMap.set(0, root0.size)
    function dfs2(at, parent) {
        let p_guess = guessMap.get(parent)
        if (guessSet.has(`${parent}|${at}`)) {
            p_guess -= 1
        }
        if (guessSet.has(`${at}|${parent}`)) {
            p_guess += 1
        }
        guessMap.set(at, p_guess)
        for (const to of graph.get(at) || []) {
            if (to !== parent) {
                dfs2(to, at)
            }
        }
    }
    for (const to of graph.get(0) || []) {
        dfs2(to, 0)
    }
    let ans = 0
    for (const [node, value] of guessMap.entries()) {
        if (value >= k) {
            ans += 1
        }
    }
    return ans
};
