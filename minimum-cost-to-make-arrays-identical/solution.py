class Solution:
    def minCost(self, arr: List[int], brr: List[int], k: int) -> int:
        
        no_split_cost = 0
        for i in range(len(arr)):
            no_split_cost += abs(arr[i]-brr[i])
        
        arr.sort()
        brr.sort()
        split_cost = k
        for i in range(len(arr)):
            split_cost += abs(arr[i]-brr[i])
        
        return min(split_cost, no_split_cost)
        
        
