class Solution:
    def maximumTotalSum(self, maximumHeight: List[int]) -> int:
        maximumHeight.sort(reverse=True)
        for x in range(1,len(maximumHeight)):
            if maximumHeight[x]>=maximumHeight[x-1]:
                maximumHeight[x]=maximumHeight[x-1]-1
            if maximumHeight[x]==0 :
                return -1
        return sum(maximumHeight)
