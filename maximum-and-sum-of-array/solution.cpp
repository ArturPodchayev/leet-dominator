class Solution {
public:

    int n;

    map<pair<vector<int>, int>,int> umap;
    
    int help(int i, vector<int> mask, vector<int> &nums){
        if(i==nums.size()){
            return 0;
        }

        if(umap.find({mask,i})!=umap.end()){
            return umap[{mask,i}];
        }

        int ans = 0;

        for(int j=0;j<n;j++){
            if(mask[j]==2){
                continue;
            }
            vector<int> new_mask = mask;
            mask[j]++;
            ans = max(ans,((j+1) & nums[i]) + help(i+1,mask, nums));
            mask[j]--;
        }

        return umap[{mask,i}] = ans;
    }

    int maximumANDSum(vector<int>& nums, int numSlots) {
        n = numSlots;

        vector<int> mask(n,0);

        return help(0, mask, nums);
    }
};
