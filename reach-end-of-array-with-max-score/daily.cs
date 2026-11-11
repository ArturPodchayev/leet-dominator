public class Solution {
    public long MinimumCost(int cost1, int cost2, int costBoth, int need1, int need2) {
        long ans = 0;
        if(need1 <= need2){
            long a1 = (long)need1 * costBoth;
            long a2 = ((long)need1 * cost1) + ((long)need1 * cost2);
            ans = Math.Min(a1, a2);
            need2 = need2 - need1;
            ans += (long)need2 * Math.Min(cost2, costBoth);
        }
        else {
            long a1 = (long)need2 * costBoth;
            long a2 = ((long)need2 * cost1) + ((long)need2 * cost2);
            ans = Math.Min(a1, a2);
            need1 = need1 - need2;
            ans += (long)need1 * Math.Min(cost1, costBoth);
        }

        return ans;
        
    }
}
