class Solution {
public:
    int countIslands(vector<vector<int>>& grid, int k) {
        int n = grid.size(), m = grid[0].size();

        int dx[] = {1, -1, 0, 0};
        int dy[] = {0, 0, 1, -1};

        vector<vector<bool>>vis(n, vector<bool>(m));

        auto bfs = [&](int x, int y) {
            queue<pair<int, int>>q;
            q.push({x, y});

            long long sum = 0;
            while(!q.empty()) {
                auto [x, y] = q.front();
                q.pop();

                if(x < 0 or x >= n or y < 0 or y >= m or vis[x][y] or grid[x][y] == 0) continue;
                vis[x][y] = true;
                sum += grid[x][y];
                for(int i=0;i<4;i++) {
                    q.push({x+dx[i], y+dy[i]});
                }
            }

            return sum;
        };

        int ans = 0;
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {
                if(!vis[i][j] and grid[i][j] != 0) {
                    long total_value = bfs(i, j);
                    if(total_value%k == 0) {
                        ans++;
                    }
                }
            }
        }

        return ans;
    }
};


// TC : O(n*m)
// SC : O(n*m)
