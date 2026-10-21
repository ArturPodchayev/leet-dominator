/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let correct = s.split("").sort().join('');
    let n = s.length;

    // hint 1: If s is already sorted, answer is 0.
    if(correct == s)
        return 0;

    // hint 2    
    if(correct[0] == s[0]
        || correct[n-1] == s[n-1] ) 
        return 1;

    // hint 3
    if(n == 2)
        return -1;

    
    let minChar = correct[0];
    let maxChar = correct[n - 1];        

    // hint 4
    if (s[0] === maxChar && s[n - 1] === minChar) {
        let hasMinInside = s.slice(0, n - 1).includes(minChar);
        let hasMaxInside = s.slice(1).includes(maxChar);

        if (!hasMinInside && !hasMaxInside) {
            return 3;
        }
    }

    

    

    return 2;
};
