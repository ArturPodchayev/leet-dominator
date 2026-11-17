/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (w1, w2) {
    const map1 = new Map();
    for (let i = 0; i < w1.length; i++)
        map1.set(w1[i], (map1.get(w1[i]) ?? 0) + 1)

    const map2 = new Map();
    for (const c of w2) {
        if (map1.has(c)) {
            const t = map1.get(c);
            if (t < -2) return false;
            map1.set(c, t - 1)
        }
        else {
            const t = map2.get(c); 
            if (t >= 3) return false;
            map2.set(c, (t ?? 0) + 1)
        }
    }

    for (const [k, v] of map1)
        if (v > 3) return false;

    return true;
};
