class Solution {
    func firstStableIndex(_ nums: [Int], _ k: Int) -> Int {
        let maxIndex = nums.count - 1
    
        for (index, num) in nums.enumerated() {
            if let max = nums[0...index].max(),
               let min = nums[index...maxIndex].min() {
                    if (max - min) <= k {
                        return index
                    }
            }
        }
        
        return -1     
    }
}
