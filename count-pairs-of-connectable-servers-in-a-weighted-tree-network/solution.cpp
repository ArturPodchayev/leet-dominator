class Solution {
public:
    void dfs(int index, vector<int>&visited,vector<vector<pair<int,int>>>& adj, int &cnt, int speed, int dist){
         if(visited[index]==1)return;
        if(dist%speed==0)cnt++;
        visited[index]=1;
        for(auto i:adj[index]){
            dfs(i.first,visited,adj, cnt, speed, dist+i.second);
        }
    }
    int f(int index,int n, vector<vector<pair<int,int>>>& adj, int speed){
        int tmp=0;int pre=0;
        for(auto node:adj[index]){
            
            vector<int>visited(n,0);
            visited[index]=1;
            int cnt=0;
            dfs(node.first,visited, adj, cnt, speed, node.second);
            cout<<cnt<<" hhre ";
            tmp+=pre*cnt;
            pre+=cnt;

        }
        return tmp;
    }
    vector<int> countPairsOfConnectableServers(vector<vector<int>>& edges, int signalSpeed) {
        int n = edges.size()+1;
        vector<vector<int>>dist(n,vector<int>(n,-1));
        vector<vector<pair<int,int>>>adj(n);
        for(auto i:edges){
            adj[i[0]].push_back({i[1],i[2]});
            adj[i[1]].push_back({i[0],i[2]});
        }
        vector<int>ans;
        for(int i = 0; i < n; i++){
            ans.push_back(f(i,n,adj,signalSpeed));
        }
        return ans;
    }
};
