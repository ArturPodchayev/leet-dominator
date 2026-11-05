class Solution {
    func findTheDistanceValue(_ arr1: [Int], _ arr2: [Int], _ d: Int) -> Int {
        var count: Int = 0
        var arr2 = arr2.sorted()

        for element in arr1 {
            var l = 0
            var r = arr2.count - 1

            while l <= r {
                let m = (l + r) / 2
                let midVal = arr2[m]
                let distance = element - midVal

                if abs(distance) <= d {
                    count += 1
                    break
                } else if element > midVal { // shorten distance, make them closer in magnitude
                    l = m + 1
                } else {
                    r = m - 1   
                }
            }
        }
        
        return arr1.count - count
    }
}
