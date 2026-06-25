class Solution {
    public int countMajoritySubarrays(int[] nums, int target) {
        int len=nums.length,ans=0;
        int[]arr=new int[len];
        for(int i=0;i<len;i++){
            arr[i]=(nums[i]==target)?1:-1;
        }
        for(int i=0;i<len;i++){
            int sum=0;
            for(int j=i;j<len;j++){
                sum+=arr[j];
                if(sum>0)ans++;
            }
        }
        return ans;
    }
}
