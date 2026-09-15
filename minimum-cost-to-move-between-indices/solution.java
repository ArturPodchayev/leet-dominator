class Solution {
public:
    vector<int>   minCost(vector<int>& nums, vector<vector<int>>& queries) {
        vector<int>front(nums.size());
        vector<int>back(nums.size());

        //Front
        int cost=0;
        for(int i=0;i<nums.size()-1;i++){
            front[i]=cost;
            if(i==0) {
                cost=1;
                continue;
            }
            int left=abs(nums[i]-nums[i-1]);
            int right=abs(nums[i]-nums[i+1]);
            if(right>=left)  cost+=right;
            else
                cost++;
        }
        front[nums.size()-1]=cost;

        //back
        cost=0;
        for(int i=nums.size()-1;i>0;i--){
        back[i]=cost;
        if(i==nums.size()-1) {
            cost=1;
            continue;
        }
        int left=abs(nums[i]-nums[i-1]);
        int right=abs(nums[i]-nums[i+1]);
        if(left>right)  cost+=left;
        else
            cost++;
        }
        back[0]=cost;
        
        //for each query get the ans
        vector<int>ans(queries.size());
        for(int i=0;i<queries.size();i++){
            if(queries[i][0]<=queries[i][1]){
                ans[i]=abs(front[queries[i][1]]-front[queries[i][0]]);
            }
            else
                ans[i]=abs(back[queries[i][0]]-back[queries[i][1]]);
        }

        return ans;
    }
};  
