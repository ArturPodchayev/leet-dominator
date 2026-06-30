/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let evens = []
    let odds = []
    nums.forEach(function(n){
        if (n % 2 === 0){
            evens.push(0)
        } else {
            odds.push(1)
        }
    })
    let result = []
    result = result.concat(evens)
    result = result.concat(odds)
    return result
    
};
