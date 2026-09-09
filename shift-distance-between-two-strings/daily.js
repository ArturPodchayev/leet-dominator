/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let comma = 0;

    for (let i=1000; i<=n; i*=1000) {
        comma+=n-i+1;
    }

    return comma;
};
