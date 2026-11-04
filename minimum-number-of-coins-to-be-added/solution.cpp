class Solution {
public:
    int minimumAddedCoins(vector<int>& coins, int target) {
        sort(coins.begin(), coins.end());
        int addedCoins = 0;
        long maxReachable = 0;

        for (int coin : coins) {
            while (coin > maxReachable + 1) {
                maxReachable += maxReachable + 1;
                addedCoins++;
                if (maxReachable >= target) {
                    return addedCoins;
                }
            }
            maxReachable += coin;
            if (maxReachable >= target) {
                return addedCoins;
            }
        }

        while (maxReachable < target) {
            maxReachable += maxReachable + 1;
            addedCoins++;
        }

        return addedCoins;
        }
    
};
