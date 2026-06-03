class Solution:
    def earliestFinishTime(self, landStartTime: List[int], landDuration: List[int], waterStartTime: List[int], waterDuration: List[int]) -> int:

        mn = inf
        sm = inf
        for i in range(len(landStartTime)):
            sm = min(sm, landStartTime[i] + landDuration[i])
        
        for i in range(len(waterStartTime)):
            if waterStartTime[i] >= sm:
                mn = min(mn, waterStartTime[i] + waterDuration[i])
            else:
                mn = min(mn, sm + waterDuration[i])
        
        sm = inf
        for i in range(len(waterStartTime)):
            sm = min(sm, waterStartTime[i] + waterDuration[i])
        
        for i in range(len(landStartTime)):
            if landStartTime[i] >= sm:
                mn = min(mn, landStartTime[i] + landDuration[i])
            else:
                mn = min(mn, sm + landDuration[i])
        
        return (mn)
