/**
 * @param {string} 
 * @return {string}
 */
var smallestSubsequence = function (s) {

    const last = new Int32Array(26);
    const seen = new Uint8Array(26);
    const stack = new Int8Array(26);
    let top = -1;

    for (let i = 0; i < s.length; i++)
        last[s.charCodeAt(i) - 97] = i;

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;

        if (seen[c]) continue;

        while (
            top >= 0 &&
            stack[top] > c &&
            last[stack[top]] > i
        ) {
            seen[stack[top--]] = 0;
        }

        stack[++top] = c;
        seen[c] = 1;
    }

    let ans = "";
    for (let i = 0; i <= top; i++)
        ans += String.fromCharCode(stack[i] + 97);

    return ans;
};
