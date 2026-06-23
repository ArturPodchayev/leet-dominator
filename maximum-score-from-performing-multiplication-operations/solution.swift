class Solution {
    struct MaxScoreState: Hashable {
		init(_ left: Int, _ right: Int, _ multiplier: Int) {
			self.left = left
			self.right = right
			self.multiplier = multiplier
		}
		
		let left: Int
		let right: Int
		let multiplier: Int
	}

    func maximumScore(_ left: Int, _ right: Int, _ multiplierIndex: Int) -> Int {
		
		let multiplier = multipliers[multiplierIndex]
		let state = MaxScoreState(left, right, multiplier)
		if let score = scoreMap[state] {
			return score
		}
		
		var score1 = multiplier * nums[left]
		var score2 = multiplier * nums[right]
		
		if multipliers.endIndex > multiplierIndex + 1 {
			score1 += maximumScore(left + 1, right, multiplierIndex + 1)
			score2 += maximumScore(left, right - 1, multiplierIndex + 1)
		}
		
		let score = max(score1, score2)
		scoreMap[state] = score
		
		return score
	}

    func maximumScore(_ nums: [Int], _ multipliers: [Int]) -> Int {
        guard multipliers.count > 0 else { return 0 }
		
		self.nums = nums
		self.multipliers = multipliers
		self.scoreMap = [:]
		
		return maximumScore(0, nums.endIndex - 1, 0)
    }

    var nums: [Int] = []
	var multipliers: [Int] = []
	var scoreMap: [MaxScoreState : Int] = [:]
}
