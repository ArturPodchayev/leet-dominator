class Solution{
public:
    int n;
    vector<vector<int>>adj;
    vector<int>tin,tout,parent;
    int timer=0;

    void dfs(int node,int par){
        parent[node]=par;
        tin[node]=timer++;
        for(int nei:adj[node]){
            if(nei==par)continue;
            dfs(nei,node);
        }
        tout[node]=timer-1;
    }

    int rootCount(vector<vector<int>>&edges,vector<vector<int>>&guesses,int k){
        n=edges.size()+1;
        adj.assign(n,{});
        
        for(auto&e:edges){
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }

        tin.resize(n);
        tout.resize(n);
        parent.resize(n);

        dfs(0,-1);

        vector<int>diff(n+1,0);

        for(auto&g:guesses){
            int u=g[0],v=g[1];

            if(parent[v]==u){
                diff[0]+=1;
                diff[tin[v]]-=1;
                if(tout[v]+1<n)diff[tout[v]+1]+=1;
            }
            else if(parent[u]==v){
                diff[tin[u]]+=1;
                if(tout[u]+1<n)diff[tout[u]+1]-=1;
            }
        }

        vector<int>score(n,0);
        int curr=0;
        for(int i=0;i<n;i++){
            curr+=diff[i];
            score[i]=curr;
        }

        int ans=0;
        for(int i=0;i<n;i++){
            if(score[tin[i]]>=k)ans++;
        }

        return ans;
    }
};
