class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int n=nums.length;
        int[]arr=new int[n];
        int index=0;
        for(int val:nums){
            if(val<pivot)arr[index++]=val;
        }
        for(int val:nums){
            if(val==pivot)arr[index++]=val;
        }
        for(int val:nums){
            if(val>pivot)arr[index++]=val;
        }
        return arr;
    }
}
