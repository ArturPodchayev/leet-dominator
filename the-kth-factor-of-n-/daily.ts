type ll = bigint;

function processStr(s: string, k: ll): string {
    let l: ll = 0n;
    for (const c of s) {
        if (c === '*') {
            l = l > 0n ? l - 1n : 0n;
        } else if (c === '#') {
            l *= 2n;
        } else if (c === '%') {
            continue;
        } else {
            l += 1n;
        }
    }

    if (k >= l) return '.';

    let kBig: ll = BigInt(k); // Explicitly convert k to BigInt
    for (let i = s.length - 1; i >= 0; --i) {
        const c = s[i];
        if (c === '*') {
            l += 1n;
        } else if (c === '#') {
            l /= 2n;
            if (kBig >= l) kBig -= l;
        } else if (c === '%') {
            kBig = l - kBig - 1n; // Ensure BigInt operations
        } else {
            l -= 1n;
            if (l === kBig) return c;
        }
    }

    return '.';
}
