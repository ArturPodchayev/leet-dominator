class Solution {
  
    func minCost(_ houses: [Int], _ cost: [[Int]], _ m: Int, _ n: Int, _ target: Int) -> Int {
        //lets start from house 0 with 0 neighborhoods with color 0
        var result = Int.max 

        var memo = Array(
            repeating: Array(
                repeating: Array(repeating: -1, count: target + 1), 
                count: n + 1),
            count: m) 

        func paint(_ house: Int, _ lastColor: Int, _ target: Int) -> Int {
            if target < 0 {
                return Int.max
            }

            if house == m && target == 0 {
                return 0
            } 

            if house == m && target != 0 {
                return Int.max
            }

            if memo[house][lastColor][target] != -1 {
                return memo[house][lastColor][target]
            }

            let currColor = houses[house]
            if currColor != 0 {
                //house has been painted before
                //if different color, the prev neighborhood ends here, decrement target
                let newTarget = currColor != lastColor ? target - 1 : target
                let res =  paint(house + 1, currColor, newTarget)
                memo[house][lastColor][target] = res
                return res
            }

            //house is not painted and we need to choose a paint
            var tempResult = Int.max 

            for nextColor in 1...n {
                //if next color we choose is different from last color, it belongs to diff neighborhood
                let newTarget = nextColor != lastColor ? target - 1 : target
                let val = paint(house + 1, nextColor, newTarget) 
                if val != Int.max { //if the chosen color leads to an answer, use it
                    tempResult = min(tempResult, cost[house][nextColor - 1] + val)
                }
            }

            memo[house][lastColor][target] = tempResult
            return tempResult
        }

        result = paint(0, 0, target)
        return result == Int.max ? -1 : result
    }
}
