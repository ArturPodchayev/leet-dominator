class Solution {
public:
    int climbStairs(int n, vector<int>& cost) {
        vector<int>pre(n+1,0);
        pre[0] = 0;
        for(int i = 0;i<n;i++){
            int step = INT_MAX;
            if(i == 0){
                step = 1 + cost[i];
            }
            else if(i == 1){
                step = cost[i] + min(4 , 1 + pre[i]);
            }
            else{
                step = cost[i] + min({1 + pre[i], 4 + pre[i-1], 9 + pre[i-2] });
            }
            pre[i+1] = step; 
        }
        return pre[n];
        
    }
};
