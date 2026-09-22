function resultArray(nums, k, queries) {
    const mods = nums.map(num => num % k);
    const result = [];
    
    for (const [index, value, start, xi] of queries) {
        mods[index] = value % k;
        
        let currentMod = 1;
        let count = 0;
        const subArrayStart = start;
        const n = mods.length;
        let zeroEncountered = false;
        
        for (let i = subArrayStart; i < n; i++) {
            currentMod = (currentMod * mods[i]) % k;
            if (currentMod === xi) {
                count++;
            }
            if (currentMod === 0) {
                if (xi === 0) {
                    count += n - i - 1;
                }
                break;
            }
        }
        
        result.push(count);
    }
    
    return result;
}
