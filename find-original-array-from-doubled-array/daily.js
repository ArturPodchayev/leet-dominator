/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let res = [];
    for(let startDigit = 1; startDigit < 9; startDigit++) {
        let current = startDigit;
        for(let nextDigit = startDigit + 1; nextDigit < 10; nextDigit++) {
            current = current * 10 + nextDigit;
            if(current >= low && current <= high) {
                res.push(current);
            }

        }
    }
    return res.sort((a, b) => a - b);
};
