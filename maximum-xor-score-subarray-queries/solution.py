class Solution:
    def maximumSubarrayXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        n = len(nums)
        cur_arr = [[v,v] for v in nums] # XOR val, max sub-array XOR val
        res = {tuple(q): 0 for q in queries}
        for l in range(1, n+1): # 1,2,..,n
            for i in range(n-l+1):
                j = i + l - 1
                if (i, j) in res:
                    res[(i, j)] = cur_arr[i][1]
            for i in range(len(cur_arr)-1):
                prev_max = max(cur_arr[i][1], cur_arr[i+1][1])
                cur_arr[i][0] = cur_arr[i][0] ^ cur_arr[i+1][0]
                cur_arr[i][1] = max(prev_max, cur_arr[i][0])
            cur_arr.pop()
            
        return [res[tuple(q)] for q in queries]
                
        
