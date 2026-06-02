class Solution {
    public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {
        int[] ans = new int[2];  //for storing answers
        int n = nums.length;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(Math.abs(i-j) >= indexDifference && Math.abs(nums[i]-nums[j]) >= valueDifference){
                    ans[0] = i;
                    ans[1] = j;
                    return ans;
                }
            }
        }
            ans[0] = -1;
            ans[1] = -1;
            return ans;
    }
}
