function minimumPartition(s: string, k: number): number {
    let count = 0;
    let substr = '';
    for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const nextSymbol = s[i + 1];
        if (Number(currentSymbol) > k) {
            return -1
        }
        if (nextSymbol) {
            if (Number(substr + currentSymbol) <= k) {
                substr += currentSymbol;
            } else {
                count++;
                substr = currentSymbol;
            }
        } else {
            if (Number(substr + currentSymbol) <= k) {
                count++;
            } else {
                // The substring is guaranteed to have a number less than or equal to k, and there is also a current    character that is also less than or equal to k.
                count += 2;
            }
        }
    }
    return count || -1;
}
