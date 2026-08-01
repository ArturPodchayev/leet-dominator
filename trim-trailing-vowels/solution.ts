function trimTrailingVowels(s: string): string {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);

    let i=s.length-1;
    while (i >= 0) {
        if (set.has(s[i])) {
            i--;
            continue;
        }
        break;
    }

    return s.slice(0, i + 1);
};
