class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int mx1 = INT_MIN, mx2 = INT_MIN;
        for(int x : nums)
        {
            if(x >= mx1)
            {
                mx2 = mx1;
                mx1 = x;
            }
            else if(x <= mx1 && x >= mx2)
                mx2 = x;
        }
        return (mx2-1) * (mx1-1);
    }
};
