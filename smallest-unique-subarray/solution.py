class Solution:
    def smallestUniqueSubarray(self, nums: List[int]) -> int:

        def RK(arr, k):
            n = len(arr)
            if n < k:
                return []
        
            BASE = 37
            MOD  = 10**9 + 7
        
            window_hash = 0
            power = 1 
        
            for i in range(k):
                window_hash = (window_hash * BASE + arr[i]) % MOD
                if i < k - 1:
                    power = (power * BASE) % MOD
        
            seen   = {}              
            result = []
        
            seen[window_hash] = [0]
        
            for i in range(1, n - k + 1):
                window_hash = (window_hash - arr[i - 1] * power) % MOD
                window_hash = (window_hash * BASE + arr[i + k - 1]) % MOD
                window_hash %= MOD 
        
                if window_hash in seen:
                    # for prev in seen[window_hash]:
                    #     if arr[prev:prev + k] == arr[i:i + k]:
                    #         result.append((prev, i))
                    seen[window_hash].append(i)
                else:
                    seen[window_hash] = [i]
        
            return seen

        def check(mid):

            subd=RK(nums,mid)
            # print(mid)
            # print(subd)

            for sub in subd:

                if len(subd[sub])==1:
                    return True
            return False
                    
        n=len(nums)
        start=1
        end=n
        ans=-1

        while start<=end:

            mid=(start+end)>>1

            if check(mid):
                end=mid-1
                ans=mid
            else:
                start=mid+1
        return ans     
