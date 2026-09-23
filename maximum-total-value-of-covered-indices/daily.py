class Solution:
def minOperations(self, nums: list[int], x: int) -> int:
    right = sum(nums)
    mp = {0:-1}
    left = 0
    n = len(nums)
    ans = float('inf')
    for i in range(n):
        right-=nums[i]
        need = x-right
        left += nums[i]
        if need in mp:
            pos = mp[need]
            ans = min(ans,pos+1+(n-i-1))
        if left not in mp:
            mp[left] = i
    
    if x-right in mp:
        pos = mp[need]
        ans = min(ans,pos+1+(n-i-1))
   
    
    return ans if ans != float('inf') else -1
