#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
public:
    vector<int> pathExistenceQueries(int n, vector<int>& nums, int maxDiff, vector<vector<int>>& queries) {
        vector<int> p(n);
        for (int i = 0; i < n; ++i) p[i] = i;
        sort(p.begin(), p.end(), [&](int i, int j) { return nums[i] < nums[j]; });

        vector<int> pos(n);
        for (int i = 0; i < n; ++i) pos[p[i]] = i;

        // far[i] is the furthest index reachable from sorted position i in one jump
        vector<int> far(n);
        int r = 0;
        for (int i = 0; i < n; ++i) {
            while (r < n && nums[p[r]] - nums[p[i]] <= maxDiff) r++;
            far[i] = r - 1;
        }

        // Binary lifting table
        int log_n = 18;
        vector<vector<int>> up(n, vector<int>(log_n));
        for (int i = 0; i < n; ++i) up[i][0] = far[i];
        for (int j = 1; j < log_n; ++j) {
            for (int i = 0; i < n; ++i) {
                up[i][j] = up[up[i][j - 1]][j - 1];
            }
        }

        vector<int> ans;
        for (auto& q : queries) {
            int u = pos[q[0]], v = pos[q[1]];
            if (u == v) { ans.push_back(0); continue; }
            if (u > v) swap(u, v);

            int dist = 0;
            int curr = u;
            for (int j = log_n - 1; j >= 0; --j) {
                if (up[curr][j] < v) {
                    curr = up[curr][j];
                    dist += (1 << j);
                }
            }
            
            // Check if one more jump reaches or exceeds v
            if (far[curr] >= v) ans.push_back(dist + 1);
            else ans.push_back(-1);
        }
        return ans;
    }
};
