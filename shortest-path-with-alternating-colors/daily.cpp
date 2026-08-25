class Solution {
public:
    int missingMultiple(vector<int>& nums, int k) {
        // Find the largest element
        int maxi = *max_element(nums.begin(), nums.end());

        // We will be traversing slightly more than the largest element
        for(int i = 1; i <= maxi+k;i++){
            //Multiples of k
            int mul = i*k;
            if(find(nums.begin(), nums.end(), mul) != nums.end()){
                //If found - skip
                continue;
            }
            else{
                // If no found - return the multiple
                return mul;
            }
        }
        return k;
    }
};
