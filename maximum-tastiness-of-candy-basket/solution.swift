class Solution {
    func calculateCandies(_ mid: Int, _ prices: [Int],_ k: Int) -> Bool{
    var i = 0
    var len = 1
    for j in 1..<prices.count{
        if prices[j] - prices[i] >= mid{
            len += 1
            i = j
        }
    }
    if len>=k{
        return true
    }
    return false
}


func maximumTastiness(_ price: [Int], _ k: Int) -> Int {
    var price = price.sorted()
    var length = price.count
    var left = 0
    var right = price[length-1] - price[0]
    var ans = 0
    while left <= right{
        var mid =  left + (right-left)/2
        var validValue = calculateCandies(mid, price,k)
        if validValue{
            ans = mid
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return ans
}
}
