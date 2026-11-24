class Solution {
public:
    int maximalNetworkRank(int n, vector<vector<int>>& roads) {
        unordered_map<int,vector<int>> m;
        int N=roads.size();
        for(int i=0;i<N;i++){
            m[roads[i][0]].push_back(roads[i][1]);
            m[roads[i][1]].push_back(roads[i][0]);
        }
        int ans=0;
        for(int i=0;i<=n;i++){
            int deg1=m[i].size();
            for(int j=i+1;j<=n;j++){
                int deg2=m[j].size();
                auto vec=m[j];
                if(find(vec.begin(),vec.end(),i)==vec.end()){
                    ans=max(ans,deg1+deg2);
                }
                else{
                    ans=max(ans,deg1+deg2-1);
                }
            }
        }
        return ans;
    }
};
