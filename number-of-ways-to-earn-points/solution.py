class Solution:

    def waysRec(self, i, types, target):
        global memo 

        if target == 0:
            return 1
        
        if i>=len(types) or target<0:
            return 0
        
        if memo[i][target]!=-1:
            return memo[i][target]

        count,marks = types[i]

        incl_ways = 0
        excl_ways = 0

        for j in range(1, count+1):
            curr_sum = target - (j*marks)

            if curr_sum<0:
                break
            
            incl_ways += self.waysRec(i+1, types, curr_sum)

        excl_ways = self.waysRec(i+1,types, target)

        memo[i][target]= (incl_ways+excl_ways)%1000000007
        return memo[i][target]

    def waysToReachTarget(self, target: int, types: List[List[int]]) -> int:
        global memo
        memo = [[-1 for i in range(target+1)] for j in range(len(types))]
        return self.waysRec(0,types, target)
        
