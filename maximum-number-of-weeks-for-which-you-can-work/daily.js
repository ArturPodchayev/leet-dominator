/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function (s, target) {
    const n = s.length;
    const cnt = new Array(26).fill(0);

    // count characters.
    for (const ch of s) {
        cnt[ch.charCodeAt(0) - 97]++;
    }

    // check if a palindrome is possible.
    let odd = 0;
    let mid = "";

    for (let c = 0; c < 26; c++) {
        if (cnt[c] & 1) {
            odd++;
            mid = String.fromCharCode(c + 97);
        }
    }

    if (odd > 1) return "";

    const halfLen = n >> 1;

    // characters available in the first half.
    const halfCnt = new Array(26);

    for (let c = 0; c < 26; c++) {
        halfCnt[c] = cnt[c] >> 1;
    }

    const targetHalf = target.slice(0, halfLen);

    // build palindrome from its first half.
    const makePalindrome = (half) => {
        const result = new Array(n);

        for (let i = 0; i < halfLen; i++) {
            result[i] = half[i];
            result[n - 1 - i] = half[i];
        }

        if (n & 1) {
            result[halfLen] = mid;
        }

        return result.join("");
    };

    // 1. try targetHalf exactly.

    const used = new Array(26).fill(0);
    let matched = 0;

    while (matched < halfLen) {
        const c = targetHalf.charCodeAt(matched) - 97;

        if (used[c] === halfCnt[c]) {
            break;
        }

        used[c]++;
        matched++;
    }

    // s = "z", target = "a" -> "z"
    if (matched === halfLen) {
        const candidate = makePalindrome(targetHalf);

        if (candidate > target) {
            return candidate;
        }
    }

    // 2. find the smallest first half > targetHalf.

    let pos = Math.min(matched, halfLen - 1);

    for (; pos >= 0; pos--) {

        // restore targetHalf[pos] if it was matched.
        if (pos < matched) {
            const c = targetHalf.charCodeAt(pos) - 97;
            used[c]--;
        }

        const targetChar = targetHalf.charCodeAt(pos) - 97;

        // smallest available character > targetChar.
        let bigger = -1;

        for (let c = targetChar + 1; c < 26; c++) {
            if (used[c] < halfCnt[c]) {
                bigger = c;
                break;
            }
        }

        if (bigger === -1) {
            continue;
        }

        used[bigger]++;

        // build first half using an array.
        const half = [];

        // prefix equal to target.
        for (let i = 0; i < pos; i++) {
            half.push(targetHalf[i]);
        }

        // first character that makes it greater.
        half.push(String.fromCharCode(bigger + 97));

        // smallest possible suffix.
        for (let c = 0; c < 26; c++) {
            let remaining = halfCnt[c] - used[c];

            while (remaining-- > 0) {
                half.push(String.fromCharCode(c + 97));
            }
        }

        return makePalindrome(half.join(""));
    }

    return "";
};
