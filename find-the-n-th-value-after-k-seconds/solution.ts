function valueAfterKSeconds(n: number, k: number): number {  
    let nums: number[] = new Array(n).fill(1);
    
    let mod = 1e9+7;
    
    while (k > 0) {
        let sum: number = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i];
            sum %= mod;
            nums[i] = sum;
        }
        k--;
    }
    
    return nums[n - 1];
};
