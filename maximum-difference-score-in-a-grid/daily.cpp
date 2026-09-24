class Solution {
public:
    int smallestIndex(vector<int>& nums) {
        int n = nums.size();
        for(int i=0;i<min(n,28);i++){
            int x = nums[i];
            int num = 0;
            while(x > 0){
                num += x%10;
                x = x/10;
            }
            if(num == i) return i;
        }
        return -1;
    }
};
