class Solution {
public:
    int getsum(vector<int>& a, int start, int end)
{
    int sum = 0;
    for(int i = start ; i<=end ;i++)
        sum+= a[i];
    return sum;
}
    int subarraySum(vector<int>& nums) 
    {
       int ans = 0;
    for(int i = 0 ; i < nums.size() ; i++)
        {
            int idx = max(0, i - nums[i]);
            ans+= getsum(nums,idx,i);
        }
        return ans;
    }
};
