/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {

    const small = [];

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) { 
                 
            if (--k === 0) return i;
            if( i*i === n) break;
            small.push(i);
        }
    }

    // we start from the end of small and add complementary factors
    for (let j = small.length - 1; j >= 0; j--) {

        const complement = n / small[j];
        if (--k === 0) return complement;
    }

    return -1;
};
