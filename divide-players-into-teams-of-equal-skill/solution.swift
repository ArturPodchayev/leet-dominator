class Solution {
    func dividePlayers(_ skill: [Int]) -> Int {
        let skill = skill.sorted()
        let summ = skill.first! + skill.last!
        let n = skill.count
        var ans = 0

        for i in 0..<n / 2 {
            if skill[i] + skill[n - 1 - i] != summ {
                return -1
            }
            ans += skill[i] * skill[n - 1 - i]
        }

        return ans
    }
}
