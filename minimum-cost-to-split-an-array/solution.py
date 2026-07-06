class Solution:
    def dp(self,i,prev,nums,k,dct):
        if i>=len(nums):
            return 0
        if (i,prev) in dct:
            return dct[(i,prev)]
        x=float("infinity")
        sm=0
        cnt=defaultdict(lambda :0)
        for j in range(i,len(nums)):
            cnt[nums[j]]+=1
            if cnt[nums[j]]==2:
                sm+=2
            elif cnt[nums[j]]>2:
                sm+=1
            z=self.dp(j+1,j,nums,k,dct)+k+sm
            x=min(x,z)
        dct[(i,prev)]=x
        return x
        
    def minCost(self, nums: List[int], k: int) -> int:
        return self.dp(0,0,nums,k,{})
        
