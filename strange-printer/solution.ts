const LOWER_A = "a".charCodeAt(0);

function strangePrinter(s: string): number {
    // Get unique character sequences
    const starts: number[] = [];
    for (let i = 0; i < s.length; ++i) {
        if (i < 1 || s[i-1] != s[i]) {
            starts.push(s.charCodeAt(i) - LOWER_A);
        }
    }

    // Initialize memory
    const N = starts.length;
    const mem: number[][] = new Array(N);
    
    // Solve
    for (let max = 0; max < N; ++max) {
        mem[max] = new Array(max+1).fill(1);
        for (let min = max - 1; min >= 0; --min) {
            let minTurns = N; // max - min + 1;
            for (let mid = min; mid < max; ++mid) {
                let turns = mem[mid][min] + mem[max][mid + 1];
                turns -= +(starts[mid] == starts[max]);
                minTurns = Math.min(minTurns, turns);
            }
            mem[max][min] = minTurns;
        }
    }

    return mem[N-1][0];
};
