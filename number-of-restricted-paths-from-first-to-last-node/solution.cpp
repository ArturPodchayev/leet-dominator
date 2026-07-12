class Solution {
public:
    int countRestrictedPaths(int n, vector<vector<int>>& edges) {
        const int MOD = 1000000007;
        // buil graph
        vector<vector<pair<int, int>>> graph(n + 1);
        for (const vector<int>& e : edges) {
            graph[e[0]].push_back({e[1], e[2]});
            graph[e[1]].push_back({e[0], e[2]});
        }

        // dijkstra;
        vector<int> count(n + 1, 0);
        vector<int> minDist(n + 1, INT_MAX);
        count[n] = 1;
        minDist[n] = 0;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
        pq.push({0, n});
        while (!pq.empty()) {
            int dist = pq.top().first;
            int cur = pq.top().second;
            pq.pop();
            if (dist != minDist[cur]) continue;
            for (auto& [nei, cost] : graph[cur]) {
                if (minDist[nei] > dist + cost) {
                    minDist[nei] = dist + cost;
                    pq.push({minDist[nei], nei});
                    count[nei] = (count[nei] + count[cur]) % MOD;
                } else if (minDist[nei] > dist) {
                    count[nei] = (count[nei] + count[cur]) % MOD;
                }
            }
        }  
        return count[1];
    }
};
