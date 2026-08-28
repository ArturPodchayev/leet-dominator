class Solution {
public:
    long long numberOfWeeks(vector<int>& nums) {
        if(nums.size()==1){
            return 1;
        }
        long long m=*max_element(nums.begin(),nums.end());
        long long s=accumulate(nums.begin(),nums.end(),0LL);
        if(2*m-s<2){
            return s;
        }
        return 2*(s-m)+1;
    }
};
