function mergeCharacters(s: string, k: number): string {
    const result: string[] = [];
    const cnt = new Array(26).fill(0);

    for (const c of s) {
        const idx = c.charCodeAt(0) - 97; // 'a' = 97
        if (cnt[idx] > 0) continue; // Merge = skip the character

        // Add new character to the last k
        result.push(c);
        cnt[idx]++;

        if (result.length > k) { // If there were already k, remove the first one
            const drop = result[result.length - k - 1];
            cnt[drop.charCodeAt(0) - 97]--;
        }
    }

    return result.join('');
}
