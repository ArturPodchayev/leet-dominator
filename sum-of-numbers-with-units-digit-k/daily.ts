function gcdValues(nums: number[], queries: number[]): number[] {
    const mx = 50000;
    const fr: number[] = new Array(mx + 1).fill(0);
    nums.forEach(n => {
        fr[n] += 1;
    });
    
    const ct: number[] = new Array(mx + 1).fill(0);
    for (let g = 1; g <= mx; g++) {
    let tm = fr[g] || 0;  // Initialize tm with fr[g]
    
    for (let m = g * 2; m <= mx; m += g) {
        tm += fr[m];
    }
    ct[g] = comb(tm, 2);
}

    
    for (let g = mx; g >= 1; g--) {
    const start = 2 * g; 
    for (let m = start; m <= mx; m += g) {
        ct[g] -= ct[m]; 
    }
}

    const xgl: number[] = [];
    const xcl: number[] = [];

    for (let g = 1; g <= mx; g++) {
        if (ct[g] > 0) {
            xgl[xgl.length] = g;
            xcl[xcl.length] = ct[g];
        }
}


    const szs = xgl.length;
    const pr: number[] = new Array(szs);
    pr[0] = xcl[0];

    for (let i = 1; i < szs; i++) {
        pr[i] = pr[i - 1] + xcl[i];
    }

    const res: number[] = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const q = queries[i];
        res[i] = (q < 0 || q >= pr[szs - 1]) ? -1 : xgl[binarySearch(pr, q)];
    }

    return res;
}

function comb(n: number, k: number): number {
    if (n < k) return 0;
    
    const numerator = n * (n - 1);
    return Math.floor(numerator / 2);
}


function binarySearch(pr: number[], q: number): number {
    let lft = 0, rgt = pr.length - 1;
    while (lft < rgt) {
        const m = lft + Math.floor((rgt - lft) / 2);
        if (pr[m] > q) {
            rgt = m;
        } else {
            lft = m + 1;
        }
    }
    return lft;
}
