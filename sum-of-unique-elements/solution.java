class Solution {
    public int sumOfUnique(int[] nums) {
        int sum = 0;
        int max = Integer.MIN_VALUE;
        for(int i=0 ; i<nums.length ; i++){
            max = Math.max(max , nums[i]);
        }
        int count[] = new int[max+1];
        for(int i=0 ; i<nums.length ; i++){
            count[nums[i]]++;
        }
        for(int i=0 ; i<count.length ; i++){
            if(count[i] == 1){
                sum += i;
            }
        }
        return sum;
    }
}
