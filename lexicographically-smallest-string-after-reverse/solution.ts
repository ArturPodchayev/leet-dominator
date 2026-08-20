function lexSmallest(s: string): string {
    let ans = s;

    for (let k = 1; k <= s.length; k++) {
        const l = s.slice(0, k).split('').reverse().join('') + s.slice(k);
        if (l < ans) ans = l;
    }

    for (let k = 1; k < s.length; k++) {
        const l = s.slice(0, s.length - k) + s.slice(s.length - k).split('').reverse().join('');
        if (l < ans) ans = l;
    }

    return ans;
}
