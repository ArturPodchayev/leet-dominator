class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        # afterall, who can give you more priority than heaps :)

        pq = [] # insertion format -> end time, group number

        count = 0
        intervals.sort()

        for start,end in intervals:
            if pq and pq[0][0] < start:
# we can insert off our current interval in some existing group
                time,num = heappop(pq)
                heappush(pq,(end,num))
            else:
# else, we create a new group for out current interval
                heappush(pq,(end,count))
                count += 1
#count represents the number of grops we created
        return count

        
