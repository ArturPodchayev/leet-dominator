class Solution {
    public int[] decompressRLElist(int[] nums) {
        int ind=0;
       int size=0;
       for(int i=0;i<nums.length;i+=2) size+=nums[i];
       int arr[]=new int[size];
      for(int i=0;i<nums.length;i+=2){
        int val=nums[i+1];
        int freq=nums[i];
        for(int j=0;j<freq;j++){
            arr[ind++]=val;
          
        }
       
       }
       return arr;
    }
}
