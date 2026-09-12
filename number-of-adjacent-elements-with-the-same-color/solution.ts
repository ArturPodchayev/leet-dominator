const colorTheArray = (n: number, queries: number[][]): number[] => {
    let adjacent = 0
    const answer: number[] = new Array(queries.length).fill(0)
    const colors: number[] = new Array(n+2).fill(0)
    for (let i = 0; i < queries.length; i++) {
        const [j, c] = [queries[i][0] + 1, queries[i][1]]
        if (c !== colors[j]) {
            // add 1 if left/right is the same
            adjacent += (c == colors[j - 1] ? 1 : 0) + (c == colors[j + 1] ? 1 : 0)
            if (colors[j] !== 0) {            
              // remove 1 if left/right was the same
              adjacent -= (colors[j] == colors[j-1] ? 1 : 0) + (colors[j] == colors[j+1] ? 1 : 0)
            }
        }
        colors[j] = c
        answer[i] = adjacent
    }
    return answer
}
