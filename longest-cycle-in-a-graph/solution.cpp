class Solution {
public:

    int ans = -1;

    void dfs(vector <vector <int> > &adj, vector <bool> &visited, vector <bool> &currRec, int source, vector <int> &depth, int curr){
        visited[source] = true;
        currRec[source] = true;
        curr++;
        depth[source] = curr;
        for(int i = 0; i < adj[source].size(); i++){
            int node = adj[source][i];
            if(visited[node]){
                if(currRec[node]){
                    //cycle found
                    ans = max(ans, curr - depth[node] + 1);
                    currRec[source] = false;
                    return;
                }
            }else{
                dfs(adj, visited, currRec, node, depth, curr);
            }
        }
        currRec[source] = false;
    }

    int longestCycle(vector<int>& edges) {
        int n = edges.size();
        vector <int> depth(n, 0);
        vector <vector <int> > adj(n);
        vector <bool> visited(n, false), currRec(n, false);
        for(int i = 0; i < n; i++){
            if(edges[i] != -1){
                adj[i].push_back(edges[i]);
            }
        }
        for(int i = 0; i < n; i++){
            if(!visited[i]) dfs(adj, visited, currRec, i, depth, 0);
        }
        return ans;
    }
};
