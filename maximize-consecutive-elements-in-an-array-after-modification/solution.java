class Solution {
    public int maxSelectedElements(int[] nums) {
        Arrays.sort(nums);
        HashMap<Integer,Integer> consecutiveCount = new HashMap<>();
        int ans = 1;
        for(int i = 0; i < nums.length; i++){
            int c1 = consecutiveCount.getOrDefault(nums[i],0)+1;
            int c2 = consecutiveCount.getOrDefault(nums[i]-1,0)+1;
            consecutiveCount.put(nums[i]+1,c1);
            consecutiveCount.put(nums[i],c2);
            ans = Math.max(ans,Math.max(c1,c2));
        }
        return ans;

    }
}
