public class Solution {
    public int MaximumLength(int[] nums, int k) {
        int [ , ] help = new int [k+1, nums.Length];
        for (int i=0;i< nums.Length; i++){
            help[0,i]=1;
        }
        for (int i=1; i< nums.Length; i++){
         for(int j=0; j<i; j++){
            if(nums[j]==nums[i]){
                for (int l=0; l<= k; l++){
                    help[l,i]=Math.Max(help[l,i], help[l,j]+1);
                }
            }
            else {
                 for (int l=0; l<k; l++){
                    help[l+1,i]=Math.Max(help[l+1,i], help[l,j]+1);
            }
         }
        }
        }
        int ans=0;
        for (int i=0; i<=k; i++){
            for (int j=0; j<nums.Length; j++){
                ans= Math.Max(ans, help[i,j]);
            }
        }
        return ans;
    }
}
