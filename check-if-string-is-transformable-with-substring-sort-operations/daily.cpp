class Solution {
public:
    int longestMonotonicSubarray(vector<int>& nums) {
        int n=nums.size();
        if(n==1) return 1;
        int prev=nums[0];//previous element
        int ic=1;//increment count to maintain size of increasing sliding window
        int dc=1;//decrement count to maintain size of decreasing sliding window
        int ans=0;
        for(int i=1;i<n;i++){
            if(prev<nums[i]){//increasing sliding window
                ic++;//increment the size
                dc=1;//setting decreasing count
            }
            else if(prev>nums[i]){//decreaing sliding window
                dc++;//increment the size od decreasing sliding window
                ic=1;//initalizing the increment count
            }
            else{      //if prev==nums[i] when both elements are equal
                ic=1;
                dc=1;
            }
            prev=nums[i];  //for next iteration, current element will be previous to next element
            ans=max(ans,max(ic,dc)); // finding the max length
        }
        return ans;//returning the max length
    }
};
