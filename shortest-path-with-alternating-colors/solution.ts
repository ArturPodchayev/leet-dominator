function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {

    type node = {
        edge: number
        color: string
        colorId: number
        dist: number
    }

    const dct: Record<number, node[]> = {}
    const res: number[] = new Array(n).fill(-1)
    const vstd: boolean[][] = new Array(n);
    const q: node[] = new Array().fill(null)

    for(let i = 0; i < vstd.length; i++) {
        vstd[i] = new Array(2).fill(false)
    }

    for(let i = 0; i < redEdges.length; i++) {
        if(!dct[redEdges[i][0]]) dct[redEdges[i][0]] = new Array().fill(null)
        dct[redEdges[i][0]].push({
            edge: redEdges[i][1],
            color: 'red',
            colorId: 0
        } as node)
    }

    for(let i = 0; i < blueEdges.length; i++) {
        if(!dct[blueEdges[i][0]]) dct[blueEdges[i][0]] = new Array().fill(null)
        dct[blueEdges[i][0]].push({
            edge: blueEdges[i][1],
            color: 'blue',
            colorId: 1
        } as node)
    }

    q.push({
        edge: 0,
        color: '',
        colorId: -1,
        dist: 0
    } as node)
    vstd[0][0] = true
    res[0] = 0;

    while(q.length > 0) {
        var node = q.shift()
        if(!dct[node.edge]) continue;
        dct[node.edge].map(item => {
            if(!vstd[item.edge][item.colorId] && node.color !== item.color) {
                if(res[item.edge] === -1) res[item.edge] = node.dist + 1
                vstd[item.edge][item.colorId] = true
                q.push({
                edge: item.edge,
                color: item.color,
                colorId: item.colorId,
                dist: node.dist + 1
                })
            }
        })
    }

    return res
};
