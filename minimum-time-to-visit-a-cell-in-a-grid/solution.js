/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(grid) {
    if(grid[0][1] > 1 && grid[1][0] > 1) return -1

    const m = grid.length
    const n = grid[0].length
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
    const visited = Array.from({length: m}, ()=>Array(n).fill(false))
    visited[0][0] = true

    const pq = new MinPriorityQueue({priority: x => x[0]})
    pq.enqueue([0,0,0])

    while(!pq.isEmpty()){
        let [t,i,j] = pq.dequeue().element

        for(let [dx, dy] of dirs){
            let x = i+dx
            let y = j+dy
            if(x < 0 || x >= m) continue
            if(y < 0 || y >= n) continue
            if(visited[x][y] === true) continue

            let newTime = t+1
            if(grid[x][y] > newTime){
                newTime += Math.floor((grid[x][y] - t) / 2) * 2
            }

            if(x === m-1 && y === n-1){
                return newTime
            }
            
            visited[x][y] = true
            pq.enqueue([newTime, x, y])
        }
    }


    return -1
};
