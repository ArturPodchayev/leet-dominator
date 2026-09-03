class Solution {
private:
    int reqSum(int n){
        int temp=n;
        int res=0;
        while(temp>0){
            res=res+temp%10;
            temp/=10;
        }
        return res;
    }
public:
    
    int differenceOfSum(vector<int>& nums) {
        int elementSum=0;
        int digitSum=0;
        for(int i=0;i<nums.size();i++){
            elementSum+=nums[i];
            digitSum+=reqSum(nums[i]);
        }
        return abs(digitSum-elementSum);
    }
};
