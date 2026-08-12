class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        Map<Integer,Integer> freq=new HashMap<>();

        int maxLen=0;

        int i=0;

        for(int j=0; j < nums.length; j++){
            int ele=nums[j];

            while(freq.containsKey(ele) && freq.get(ele) >= k){
                freq.put(nums[i],freq.getOrDefault(nums[i++],0) - 1);
            }

            freq.put(ele,freq.getOrDefault(ele,0) + 1);

            maxLen=Math.max(maxLen,j - i + 1);
        }

        return maxLen;
    }
}
