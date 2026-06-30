class Solution {
public:
    vector<int> transformArray(vector<int>& nums) {
        int size = nums.size();
        vector<int> result(size);
        int even = 0;
        for(int i=0;i<size;i++){
            if(nums[i]%2==0){
                even++;
            }
        }
        for(int i=0;i<size;i++){
            if(i<even){
                result[i]=0;
            }
            else{
                result[i]=1;
            }
        }
        return result;
    }
};
