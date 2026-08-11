function minArrivalsToDiscard(arrivals: number[], w: number, m: number): number {
    const n: number = arrivals.length;
    if (n === 0) return 0;
    
    const hash: Map<number, number> = new Map(); // type -> count in current window
    const kept: number[] = new Array(n).fill(0); // track kept items
    let dis: number = 0;
    
    for (let i = 0; i < n; i++) {
        const idx: number = i - w;
        if (idx >= 0 && kept[idx]) {
            hash.set(arrivals[idx], (hash.get(arrivals[idx]) || 0) - 1);
        }
        
        const t: number = arrivals[i];
        if ((hash.get(t) || 0) < m) {
            kept[i] = 1;
            hash.set(t, (hash.get(t) || 0) + 1);
        } else {
            dis++;
        }
    }
    return dis;
}
