class Solution {
    public int minCost(int[] houses, int[][] cost, int m, int n, int target) {
        return paint(0, 0, 0, cost, houses, new int[m + 1][n + 1][target + 1], target);
    }
    public int paint(int house, int cos, int neighborhood, int[][] cost, int[] houses, int[][][] dp, int target) {
        if(house == houses.length) return neighborhood == target ? 0 : -1;
        if(neighborhood > target) return -1;
        if(dp[house][cos][neighborhood] != 0)
            return dp[house][cos][neighborhood];
        if(houses[house] != 0){
            if(houses[house] == cos)
                return dp[house][cos][neighborhood] = paint(house + 1, houses[house], neighborhood, cost, houses, dp, target);
            else
                return dp[house][cos][neighborhood] = paint(house + 1, houses[house], neighborhood + 1, cost, houses, dp, target);
        }
        int minVal = Integer.MAX_VALUE;
        for(int i=1; i<=cost[0].length; i++) {
            int result = 0;
            if(i == cos) {
                result = paint(house + 1, i, neighborhood, cost, houses, dp, target);
            }
            else {
                    result = paint(house + 1, i, neighborhood + 1, cost, houses, dp, target);
            }
            if(result != -1)
                minVal = Math.min(result + cost[house][i-1], minVal);
        }
        return dp[house][cos][neighborhood] = minVal == Integer.MAX_VALUE ? -1 : minVal;
        
    }
}

