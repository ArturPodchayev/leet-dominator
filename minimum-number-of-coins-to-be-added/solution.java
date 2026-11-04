class Solution {
    public int minimumAddedCoins(int[] coins, int target) {
        Arrays.sort(coins);
        int sum=0;
        int cnt=0;
        for(int i=0;i<coins.length;)
        {
            if(sum+1<coins[i])
            {
                cnt++;
                sum+=(sum+1);
            }
            else
            {
                sum+=coins[i];
                i++;
            }
            if(sum>=target)
            {
                break;
            }
        }
        while(sum<target)
        {
            cnt++;
            sum+=(sum+1);
        }
        return cnt;


    }
}
