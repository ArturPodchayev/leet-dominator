class Solution {
public:
    long long maximumScore(vector<int>& nums, string s) {
        int n=nums.size();
        int en=-1;
        for(int i=n-1;i>=0;i--){
            if(s[i]=='1'){
                en=i;
                break;
            }
        }
        if(en==-1){
            return 0;
        }
        long long ans=0;
        priority_queue<int>pq;
        for(int i=0;i<=en;i++){
            if(s[i]=='0'){
                pq.push(nums[i]);
            }
            else{
                if(pq.empty()){
                    ans+=nums[i];
                    continue;
                }
                int w=pq.top();
                if(nums[i]<w){
                    pq.pop();
                    pq.push(nums[i]);
                    ans+=w;
                }
                else{
                    ans+=nums[i];
                }
            }
        }
        return ans;
    }
};
