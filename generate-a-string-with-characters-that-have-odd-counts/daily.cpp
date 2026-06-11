class Solution {
public:
    const long long MOD = 1e9 + 7;

    long long power(long long a, long long b){
        long long res = 1;

        while(b){
            if(b & 1) res = (res * a) % MOD;
            a = (a * a) % MOD;
            b >>= 1;
        }

        return res;
    }

    int assignEdgeWeights(vector<vector<int>>& edges) {
        unordered_map<int, vector<int>> adjL;
        int n = edges.size();

        for(int i=0; i<n; i++){
            int u = edges[i][0];
            int v = edges[i][1];
            adjL[u].push_back(v);
            adjL[v].push_back(u);
        }

        queue<pair<int, int>> q;
        vector<int> visited(n + 2, 0);

        int max_depth = INT_MIN;
        int max_node = -1;

        q.push({1,0});
        visited[1] = 1;

        while(!q.empty()){
            int node = q.front().first;
            int depth = q.front().second;
            q.pop();

            if(depth > max_depth){
                max_depth = depth;
                max_node = node;
            }

            for(auto neighbor : adjL[node]){
                if(!visited[neighbor]){
                    q.push({neighbor, depth+1});
                    visited[neighbor] = 1;
                }
            }
        }

        if(max_depth == 0) return 0;  

        return power(2, max_depth - 1);
    }
};
