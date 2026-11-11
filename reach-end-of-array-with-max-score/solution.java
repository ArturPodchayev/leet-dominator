class Solution {
    public long findMaximumScore(List<Integer> nums) {
        long step=nums.get(0);
        long ans=0;
        int index=0;
        for(int i=1;i<nums.size();i++)
        {
            if(step<nums.get(i))
            {
               ans+=(long)(i-index)*step;
               step=nums.get(i);
               index=i;
            }       
        }
        ans+=(long)(nums.size()-1-index)*step;
        return ans;
    }
}
