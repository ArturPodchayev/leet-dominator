function minimumSubstringsInPartition(s: string): number {
    const maxFrequency: number[] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        maxFrequency[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    const dp: number[] = new Array(s.length + 1).fill(Infinity);
    dp[0] = 0; // Base case: no characters, no partitions needed

    for (let i = 1; i <= s.length; i++) {
        const freq: number[] = new Array(26).fill(0);
        let maxInWindow = 0;

        for (let j = i; j > 0; j--) {
            const index = s.charCodeAt(j - 1) - 'a'.charCodeAt(0);
            freq[index]++;
            maxInWindow = Math.max(maxInWindow, freq[index]);

            let valid = true;
            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0 && freq[k] < maxInWindow) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                dp[i] = Math.min(dp[i], dp[j - 1] + 1);
            }
        }
    }
    return dp[s.length];
}
