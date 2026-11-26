class Solution {
public:
    int minChanges(vector<int>& nums, int k) 
    {
        vector<int>diffRange(k+2,0);
        int n=nums.size();
        for(int i=0,j=n-1;i<j;i++,j--)
        {
            int d1=max(nums[j],k-nums[j]);
            int d2=max(nums[i],k-nums[i]);
            int diffMax =max(d1,d2);

            int currDiff=abs(nums[i]-nums[j]);
            // One change is required;
            diffRange[0]++;
            diffRange[diffMax+1]--;  

            // two changes are required
            if(diffMax+1<=k)
            {
                diffRange[diffMax+1]+=2;
                diffRange[k+1]-=2;
            }

            // No change is required;   
            diffRange[currDiff]--;
            diffRange[currDiff+1]++;
        }
        int res=diffRange[0];
        for(int i=1;i<=k;i++)
        {
            diffRange[i]+=diffRange[i-1];
            res=min(res,diffRange[i]);
        }

        return res;
    }
};
