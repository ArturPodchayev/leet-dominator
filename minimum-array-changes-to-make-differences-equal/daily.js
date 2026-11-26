/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let s = 10;
     while(n >= 0){
        n -= s--;
     }

     return  !(s % 2);
};
