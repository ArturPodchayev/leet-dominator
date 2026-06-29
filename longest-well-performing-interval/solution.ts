function longestWPI(hours: number[]): number {
    let max = 0;
    let prefix = 0;

    const prefixMap = new Map();

    prefixMap.set(0, -1);

    for (let i = 0; i < hours.length; i++) {
        prefix+= hours[i] > 8 ? 1 : -1;

        if (prefix > 0) {
            max = Math.max(max, i + 1);
        }

        if (prefixMap.has(prefix -1)) {
            max = Math.max(max, i - prefixMap.get(prefix - 1))
        }
        
        if (!prefixMap.has(prefix)) {
            prefixMap.set(prefix, i)
        }
    }

    return max;
};
