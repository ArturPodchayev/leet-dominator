public class Solution {
    public long WaysToBuyPensPencils(int total, int cost1, int cost2) {
        int cost1_org=cost1;
        long ways = 0;
        int x = 0;
        while(x<=total)
        {
            cost1 = x;
            ways += (total - cost1) / cost2 + 1;
            x += cost1_org;
        }
        return ways;
    }
}
