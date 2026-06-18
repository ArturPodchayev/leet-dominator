class Solution {
    func angleClock(_ hour: Int, _ minutes: Int) -> Double {
        let angle = abs(5.5 * Double(minutes) - 30.0 * Double(hour))
        return min(360.0 - angle, angle)
    }
}
