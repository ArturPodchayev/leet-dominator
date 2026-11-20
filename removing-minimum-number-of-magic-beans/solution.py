class Solution:
    def minimumRemoval(self, beans: List[int]) -> int:
        beans.sort()
        prefix=[0]
        for index in range(len(beans)):
            prefix.append(prefix[-1]+beans[index])
        
        k=len(beans)-1
        maxi=float('inf')
        for index,i in enumerate(beans):
            diff=prefix[-1]-prefix[index+1]-(i*k)
            maxi=min(maxi,diff+prefix[index])
            k-=1
        return maxi
