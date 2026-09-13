class Solution {
void bfs(int start, vector<int>& ans, vector<vector<int>>& adj) {
    queue<int> q;
    q.push(start);
    ans[start] = -1; 
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        for(int i = 1; i <= 4; i++){
            bool taken = false;
            for(auto& neig : adj[node]){
                if(ans[neig] == i){
                    taken = true;
                    break;
                }
            }
            if(!taken) {
                ans[node] = i;
                break;
            }
        }
        for(auto& neig : adj[node]) {
            if(ans[neig] == -1) {
                q.push(neig);
            }
        }
    }
}
public:
    vector<int> gardenNoAdj(int n, vector<vector<int>>& paths) {
        vector<vector<int>>adj(n + 1);
        vector<int>ans(n + 1, -1);
        for(auto& x : paths){
            adj[x[0]].push_back(x[1]);
            adj[x[1]].push_back(x[0]);
        }
        for(int i = 1; i <= n; i++){
            if(ans[i] == -1){
                bfs(i, ans, adj);
            }
        }
        ans.erase(ans.begin());
        return ans;
    }
};
