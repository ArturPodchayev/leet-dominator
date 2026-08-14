function maximumLengthSubstring(s: string): number {
    const charCounts: Record<string, number> = {};
    let maxLen = 0, start = 0;

    for (let end = 0; end < s.length; end++) {
        const charEnd = s[end];

        if (!charCounts[charEnd]) {
            charCounts[charEnd] = 0;
        }
        charCounts[charEnd]++;

        // While current character count is more than 2, shrink the window from the start
        while (charCounts[charEnd] > 2) {
            const charStart = s[start];
            charCounts[charStart]--;
            start++;
        }

        // Calculate the current window size
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}
