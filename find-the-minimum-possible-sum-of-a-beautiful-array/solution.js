/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    let hash = {};
    let sum = 0; 
    let i = 1;
    while (n > 0) {
        if(!hash.hasOwnProperty(i) && !hash.hasOwnProperty(target-i)) {
            hash[i] = target-i;
            sum += i;
            i++;
            n--
        } else {
            i++
        }
    }
    return sum
};
