class Solution {
public:
    long long maxTotalValue(vector<int>& nums, int k) {
        int maximum = *max_element(nums.begin() , nums.end()); 
        int minimum = *min_element(nums.begin() , nums.end()); 

        long long maxiVal = 1LL * (maximum - minimum); 
        long long result = 1LL * k * maxiVal; 

        return result; 
    }
};
