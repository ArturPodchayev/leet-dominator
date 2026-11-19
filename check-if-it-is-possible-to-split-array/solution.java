class Solution {
    public boolean canSplitArray(List<Integer> nums, int m) {
        if(nums.size()<=2)return true;
        int i=0;
        while(i<nums.size()-1){
            if(nums.get(i)+nums.get(i+1)>=m)return true;
            i++;}
        return false;
    }
}
