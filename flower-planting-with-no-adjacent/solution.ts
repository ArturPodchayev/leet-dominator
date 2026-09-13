function gardenNoAdj(n: number, paths: number[][]): number[] {
    let colors = new Array(n+1).fill(-1);
    let graph = {};
    for(let i = 1; i <=n ;i++) {
        graph[i] = [];
    }
    for(let p of paths) {
        graph[p[0]].push(p[1]);
        graph[p[1]].push(p[0]);
    }
    
    const dfs = (i: number) => {
        let [c,d] = [0,-1]
        while(d == -1) {
            c++;
            d = 1;
            for(let nei of graph[i]) {
                if(colors[nei] == c) {
                    d = -1;
                    break;
                }
            }
        }
        colors[i] = c;
        for(let nei of graph[i]) {
            if(colors[nei] == -1) dfs(nei);
        }
    }
    for(let i = 1; i <= n; i++) {
        if(colors[i] == -1) dfs(i);
    }
    colors.shift();
    return colors;
};
