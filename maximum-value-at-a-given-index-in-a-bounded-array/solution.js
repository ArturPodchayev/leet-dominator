/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    if(n == 1) return maxSum;
    const l = index;
    const r = n-index-1;
    const sumSide = (x, count) => {
        if(x > count) {
            // x-count --> x-1
            return (2*x-count-1)*count/2
        }
        else {
            // 1 1 1 ... 1      1 --> x-1
            // -count-x+1-      1 --> x-1
            return (x-1)*x/2+count-x+1;
            //x^2-3x+n
        }
    }
    let valL = 0;
    let valR = maxSum;
    while(valR - valL > 1) {
        const mid = Math.floor((valR + valL) / 2);
        if(sumSide(mid, l)+sumSide(mid, r)+mid <= maxSum) valL = mid;
        else valR = mid;
    }
    return valL;
};
