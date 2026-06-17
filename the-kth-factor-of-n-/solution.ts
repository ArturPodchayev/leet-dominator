function kthFactor(n: number, k: number): number {
    let idx: number = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            idx ++;
            if (idx == k) return i;
        }

    }
    return -1;
};
