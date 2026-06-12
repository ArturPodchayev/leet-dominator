class Solution {
    func maxValue(_ n: Int, _ index: Int, _ maxSum: Int) -> Int {

        func sum(_ count: Int, end: Int) -> Int {
            guard count > 0 else { return 0 }

            var total = end * (end + 1) / 2  // sum of 1 to end
            if count < end {
                // If there are less spaces than remove the excess sum 
                // Eg: end = 5 = 1, 2, 3, 4, 5
                // But we only have space for 3 (count)
                // So 1, 2 need to be removed - 5 - 3 = n = 2 
                let skip = end - count 
                total = total - skip * (skip + 1) / 2
            } else {
                // If there are empty spaces, fill it with 1
                total += (count - end) * 1
            }

            return total 

        }

        // The array needs to be filled with only positive numbers (no 0)
        // So minimum ans can be 1
        var left = 1, right = maxSum 
        var ans = 1
        while left <= right {
            let mid = left + (right - left) / 2
            // last num mid-1 and count of nums index || n-1-index
            var preSum =  sum(index, end: mid - 1)
            var postSum = sum(n-1-index, end: mid - 1)

            //print("mid: ", mid, " sum: ", mid + preSum + postSum)
            
            if mid + preSum + postSum <= maxSum {
                ans = max(ans, mid)
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return ans
    }
}
