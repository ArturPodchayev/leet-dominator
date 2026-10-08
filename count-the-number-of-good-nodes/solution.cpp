class Solution {
public:
    int ans=0;
    int helper(int node,int par,vector<vector<int>>&graph,vector<int>&visited){
        visited[node]=1;
        // cout<<node<<endl;
        if(graph[node].size()==0)return 1;
        
        int l=0,r=0;
        int prev=-1,ret,tot=0;
        bool isSame=true;
        for(auto adj_node:graph[node]){
            if(adj_node==par)continue;
            ret=0;
            if(visited[adj_node]==0){
                ret=helper(adj_node,node,graph,visited);
                if(prev!=-1 and ret!=prev){
                    isSame=false;
                }
                prev=ret;
            }
            tot+=ret;
        }
        
        if(isSame)ans++;
        return tot+1;
    }
    int countGoodNodes(vector<vector<int>>& edges) { 
        int maxi=0;
        for(auto ed:edges){
            maxi=max(maxi,ed[0]);
            maxi=max(maxi,ed[1]);
        }

        int n=maxi+1;
        vector<vector<int>>graph(n);
        for(auto ed:edges){
            int u=ed[0],v=ed[1];

            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        vector<int> visited(n);
        helper(0,-1,graph,visited);
        return ans;
    }
};
