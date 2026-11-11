class Solution {
    public long minimumCost(int cost1, int cost2, int costBoth,
                            int need1, int need2) {

        long common = Math.min(need1, need2);

        long pairCost = Math.min(costBoth, cost1 + cost2);

        long total = common * pairCost;

        long remaining1 = need1 - common;
        long remaining2 = need2 - common;

        total += remaining1 * Math.min(cost1, costBoth);
        total += remaining2 * Math.min(cost2, costBoth);

        return total;
    }
}
