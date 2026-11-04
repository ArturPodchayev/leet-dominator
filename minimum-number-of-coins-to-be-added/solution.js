/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins = coins.filter(coin => coin <= target)
    coins.sort((a, b) => a - b)
    let sum = 0, expect = sum + 1
    let result = 0
    // if (sum >= result)  return true


    for (const coin of coins) {
        while (coin > expect) {
            sum += expect
            expect = sum + 1
            result++
        }
        sum += coin
        if (sum >= target)  return result

        expect = sum + 1
    }


    // by now, we can assert sum < target
    while (true) {
        sum += expect
        result++
        if (sum >= target)
            return result

        expect = sum + 1
    }
};
