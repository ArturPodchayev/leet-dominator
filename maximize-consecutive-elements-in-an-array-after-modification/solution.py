class Solution:
    def maxSelectedElements(self, x: List[int]) -> int:
        
        def get_dp_ans(i):
            if i+1 in dp:
                dp[i] = dp[i+1] + 1
            else:
                dp[i] = 1

        x.sort(reverse = True)
        og_set = Counter(x)
        dp = {}
        for i in x:
            if i+1 not in og_set:
                if og_set[i] > 1:
                    get_dp_ans(i+1)
            
            get_dp_ans(i)
            get_dp_ans(i+1)

        return max(dp.values())
