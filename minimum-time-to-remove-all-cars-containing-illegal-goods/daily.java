class Solution {
    public int minimumCost(int[] cost) {
        Arrays.sort(cost);
        int ans=0,len=cost.length-1;
        while(len>=0){
            ans+=cost[len];
            if(len-1>-1){
                ans+=cost[len-1];
                len--;
            }
            len-=2;
        }
        return ans;
    }
}
