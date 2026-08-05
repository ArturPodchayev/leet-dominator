function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const addj: number[][] = Array.from({ length: n }, () => []);
    
    for (const x of invocations) {
        addj[x[0]].push(x[1]);
    }
    
    const spc: boolean[] = new Array(n).fill(false);
    expl(addj, k, spc);
    
    const visited: boolean[] = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!spc[i] && !visited[i]) {
            if (detect(addj, i, spc, visited)) {
                return Array.from({ length: n }, (_, index) => index);
            }
        }
    }

    const rest: number[] = [];
    for (let i = 0; i < n; i++) {
        if (!spc[i]) {
            rest.push(i);
        }
    }

    return rest;

    function expl(adj: number[][], current: number, spc: boolean[]): void {
    spc[current] = true;

    const ng = adj[current];
    for (let i = 0; i < ng.length; i++) {
        const nghbour = ng[i];
        if (!spc[nghbour]) {
            expl(adj, nghbour, spc);
        }
    }
}


    function detect(adj: number[][], current: number, spc: boolean[], visited: boolean[]): boolean {
    visited[current] = true;

    for (const nghbour of adj[current]) {
        const isSpc = spc[nghbour];
        const isVsSpc = !visited[nghbour] && detect(adj, nghbour, spc, visited);

        if (isSpc || isVsSpc) {
            return true;
        }
    }
    return false
    }
}
