function countPairsOfConnectableServers(edges: number[][], signalSpeed: number): number[] {
    const map = new Map();
    
    for(let [from, to, weight] of edges){
        const set = map.get(from) || new Set();
        set.add([to, weight]);
        map.set(from, set);
    };
    
    for(let [to, from, weight] of edges){
        const set = map.get(from) || new Set();
        set.add([to, weight]);
        map.set(from, set);
    };
    
    function dfs(node: number, sum: number, parent: number): number{
        const set = map.get(node);
        //base case end of branch
        if(set.size === 1) return sum % signalSpeed === 0 ? 1 : 0;
        let count = 0;
        if(sum % signalSpeed === 0) count++;
        
        for(let [child, weight] of set){
            if(child === parent) continue;
            count += dfs(child, sum + weight, node);
        }
        return count;
    }
    
    const counts = Array(map.size).fill(-1);
    
    for(let i = 0; i < counts.length; i++){
        const set = map.get(i);
        if(set.size === 1) counts[i] = 0;
        
        const maxs = [];
        
        for(let [child, weight] of set){
            const max = dfs(child, weight, i);
            maxs.push(max);
        }
        
        let total = 0;
        for(let j = 0; j < maxs.length - 1; j++){
            for(let k = j + 1; k < maxs.length; k++){
                total += maxs[j] * maxs[k];
            }
        }
        counts[i] = total;
    }
    
    
    return counts;
};
