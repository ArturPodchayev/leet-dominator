class Solution {
public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {
        
        vector<vector<pair<int,int>>> adj(n+1);
        for(auto &i:redEdges){
            int u=i[0],v=i[1];
            adj[u].push_back({v,1});
        }
        for(auto &i:blueEdges){
            int u=i[0],v=i[1];
            adj[u].push_back({v,-1});
        }
        vector<int> vis1(n,-1);
        vector<int> vis2(n,-1);
        queue<pair<int,int>> q;
        q.push({0,1});
        q.push({0,-1});  
        vis1[0]=0;
        vis2[0]=0;
        int cnt=0;
        while(!q.empty()){
            int m=q.size();
            for(int i=0;i<m;i++){
                int u=q.front().first,d=q.front().second; q.pop();
                for(auto &j:adj[u]){
                    int v=j.first,d1=j.second;
                    if(d1==1 && vis1[v]!=-1) continue;
                    if(d1==-1 && vis2[v]!=-1) continue;
                    if(d1==1 && d==-1){
                        vis1[v]=cnt+1;
                        q.push({v,d1});
                    }
                    if(d1==-1 && d==1){
                        vis2[v]=cnt+1;
                        q.push({v,d1});
                    }
                }
            }
            cnt++;
        }
        vector<int> ans(n,-1);
        for(int i=0;i<n;i++){
            if(vis1[i]==-1) ans[i]=vis2[i];
            else if(vis2[i]==-1) ans[i]=vis1[i];
            else ans[i]=min(vis1[i],vis2[i]);
        }
        return ans;
    }   
};
