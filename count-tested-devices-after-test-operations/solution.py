class Solution:
    def countTestedDevices(self, batteryPercentages: List[int]) -> int:
        ans = 0
        for x in batteryPercentages: 
            if ans < x: ans += 1
        return ans 
