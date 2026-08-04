/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    function topologicalSort(k, conditions) {
        let inDegree = new Array(k + 1).fill(0);
        let graph = new Map();
        
        for (let [u, v] of conditions) {
            if (!graph.has(u)) graph.set(u, new Set());
            if (!graph.get(u).has(v)) { // avoid duplicate edges
                graph.get(u).add(v);
                inDegree[v]++;
            }
        }
        
        let queue = [];
        for (let i = 1; i <= k; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }
        
        let order = [];
        while (queue.length > 0) {
            let node = queue.shift();
            order.push(node);
            if (graph.has(node)) {
                for (let neighbor of graph.get(node)) {
                    inDegree[neighbor]--;
                    if (inDegree[neighbor] === 0) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        
        return order.length === k ? order : [];
    }
    
    let rowOrder = topologicalSort(k, rowConditions);
    let colOrder = topologicalSort(k, colConditions);
    
    if (rowOrder.length === 0 || colOrder.length === 0) {
        return [];
    }
    
    let rowPos = new Map();
    let colPos = new Map();
    
    rowOrder.forEach((num, idx) => rowPos.set(num, idx));
    colOrder.forEach((num, idx) => colPos.set(num, idx));
    
    let matrix = Array.from({ length: k }, () => new Array(k).fill(0));
    
    for (let num = 1; num <= k; num++) {
        matrix[rowPos.get(num)][colPos.get(num)] = num;
    }
    
    return matrix;
};
