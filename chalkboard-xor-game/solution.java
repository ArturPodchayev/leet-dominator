class Solution {
    public boolean xorGame(int[] nums) {
        int n = nums.length;
        int xor = 0;
        for(int num : nums){
            xor ^= num;
        }
        if(xor == 0) return true;
        else if(n %2 == 0) return true;
        return false;
    }
}
