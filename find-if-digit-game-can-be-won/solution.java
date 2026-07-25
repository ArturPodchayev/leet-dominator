class Solution {
    public boolean canAliceWin(int[] nums) {
        int singledigit = 0;
        int doubledigit = 0;
        for(int num:nums){
            if(num<10){
                singledigit += num;
            }else{
                doubledigit += num;
            }
        }
        return singledigit<doubledigit || singledigit>doubledigit;
    }
}
