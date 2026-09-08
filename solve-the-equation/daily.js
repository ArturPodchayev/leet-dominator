/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let numOfDigits = 0;
    let temp = n;

    while(n>0){
        numOfDigits++;
        n = Math.floor(n/10)
    }

    if(numOfDigits <= 3){
        return 0;
    }

    return temp-1000+1;
};
