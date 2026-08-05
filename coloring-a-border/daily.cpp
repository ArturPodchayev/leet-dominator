class Solution {
public:
    void bfs(int start, vector<vector<int>>& graph, vector<int>& vis) {
        queue<int> q;

        q.push(start);
        vis[start] = 1;

        while (!q.empty()) {
            int node = q.front();
            q.pop();

            for (int next : graph[node]) {
                if (!vis[next]) {
                    vis[next] = 1;
                    q.push(next);
                }
            }
        }
    }

    vector<int> remainingMethods(int n, int k, vector<vector<int>>& invocations) {
        vector<vector<int>> graph(n);

        for (auto &e : invocations) {
            graph[e[0]].push_back(e[1]);
        }

        vector<int> vis(n, 0);
        bfs(k, graph, vis);

        bool canRemove = true;

        for (auto &e : invocations) {
            int u = e[0];
            int v = e[1];

            if (!vis[u] && vis[v]) {
                canRemove = false;
                break;
            }
        }

        vector<int> ans;

        if (!canRemove) {
            for (int i = 0; i < n; i++)
                ans.push_back(i);
        } else {
            for (int i = 0; i < n; i++) {
                if (!vis[i])
                    ans.push_back(i);
            }
        }

        return ans;
    }
};
