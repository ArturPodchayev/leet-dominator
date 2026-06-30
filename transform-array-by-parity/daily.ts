function numberOfSubstrings(s: string): number {
    const count = new Array(3).fill(0);

    let left = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {
        count[s.charCodeAt(right) - 97]++;

        while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
            ans += s.length - right;

            count[s.charCodeAt(left) - 97]--;
            left++;
        }
    }

    return ans;
}
