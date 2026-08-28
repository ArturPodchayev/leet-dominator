class Solution {
    func numberOfWeeks(_ milestones: [Int]) -> Int {
        var maxM = 0, sumM = 0
        for milestone in milestones {
            if milestone > maxM {
                maxM = milestone
            }
            sumM += milestone
        }
        let sumExceptMax = sumM - maxM
        return sumExceptMax < maxM ? (sumExceptMax * 2 + 1) : (sumM)
    }
}
