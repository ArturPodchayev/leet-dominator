/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let m = n.toString().split('').map(Number);
    let sum = m.reduce((acc,num) => acc + num, 0);
    let multi = m.reduce((acc,num) => acc * num, 1);
    let res = n % (sum + multi);
    if (res == 0) { return true}
    else { return false}


};
