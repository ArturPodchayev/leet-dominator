class Solution {
    func stableMountains(_ height: [Int], _ threshold: Int) -> [Int] {
        var result = [Int]()

        for i in 1..<height.count {
            if height[i - 1] > threshold { result.append(i) }
        }
        return result
    }
}
