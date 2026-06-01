class Solution {
    func minimumCost(_ cost: [Int]) -> Int {
       var candies = cost.sorted(by: >)
       var sum = 0
       var count = 0
        guard cost.count > 2 else
        {
            return sumOfcandies(cost)
        }

        for candy in candies
        {
            count += 1
            if count > 2
            {
                 sum += candy < sum ? 0 : candy
                 count = 0
            }
            else{
            sum += candy
            }
           
        }

        return sum
    }

    func sumOfcandies(_ costs : [Int]) -> Int
    {
        var sum = 0 
        for c in costs
        {
            sum += c
        }
        return sum
    }
}
