import heapq
class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        for i, t in enumerate(tasks):
            t.append(i)
        tasks.sort(key = lambda t : t[0])
        i = 0
        minHeap = []
        ans = []
        time = tasks[0][0]
        while i < len(tasks) or minHeap:
            while i < len(tasks) and  time >= tasks[i][0]:
                heapq.heappush(minHeap, [tasks[i][1], tasks[i][2]])
                i += 1
            if not minHeap:
                time = tasks[i][0]
            else:
                curr = heapq.heappop(minHeap)
                time += curr[0]
                ans.append(curr[1])
        return ans
