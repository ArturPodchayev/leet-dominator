/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {

    // function to find product
    const product = (num) => {
        let p = 1;
        while(num > 0) {
            p = p * (num %10);
            num = Math.floor(num/10);
        }
        return p
    }


    // brute force

    while(product(n) % t !== 0) {
        n++;
    }

    return n;
};
