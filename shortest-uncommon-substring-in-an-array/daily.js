/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0];
    
    for (const char of s) {
        if (char === '(') {
            stack.push(0);
        } else {
            const v = stack.pop();
            const score = Math.max(2 * v, 1);
            stack[stack.length - 1] += score;
        }
    }
    
    return stack[0];
};
