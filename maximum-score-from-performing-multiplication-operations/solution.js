var maximumScore = function(nums, multipliers) {
    const M = multipliers.length
    const memo = new Array(M).fill(null).map(el => new Array(M).fill(null))
    
    function dfs(operationsUsed, i,j) {
       const operationsUsed2 = i+nums.length-1-j
        if(operationsUsed === multipliers.length) {
            return 0
        }
        if(memo[i][nums.length-j-1]!==null) return memo[i][nums.length-j-1]
        
        
        const takeFirst = dfs(operationsUsed+1, i+1,j)+nums[i]*multipliers[operationsUsed]
        const takeLast = dfs(operationsUsed+1, i,j-1)+nums[j]*multipliers[operationsUsed]
        
        return memo[i][nums.length-j-1] = Math.max(takeFirst, takeLast)
    }
    
    const res = dfs(0,0, nums.length -1)
    
    return res
};
