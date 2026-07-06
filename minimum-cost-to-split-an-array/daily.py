class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], -x[1]))

        count = 0
        maxEnd = -1

        for start, end in intervals:
            if end > maxEnd:
                count += 1
                maxEnd = end

        return count
