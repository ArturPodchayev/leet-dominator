/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
    let res = 0
    const adj = {}
    for(const [from, to] of edges){
        if(adj[from] == undefined) adj[from] = []
        adj[from].push(to)
        if(adj[to] == undefined) adj[to] = []
        adj[to].push(from)
    }
    getSubTreeNodes(0)
    return res

    function getSubTreeNodes(currentNode, parent){
            let nodes = []
            let good = true
            let sum = 1
            if(adj[currentNode]){
                for(let node of adj[currentNode]){
                    if(node == parent) continue
                    let r = getSubTreeNodes(node, currentNode)
                    nodes.push(r)
                }
                for(let i = 0; i < nodes.length; i++){
                    sum += nodes[i]
                    if(i > 0 && nodes[i] != nodes[i - 1]) good = false
                }
            }
            if(good) res++
            return sum
    }
};
