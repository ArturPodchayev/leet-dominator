class Solution {
public:
    map<int, vector<int>> G;
    int dp[100000];
    int solve(int mask, vector<int> &degree, int &n, int &k) {
        if(mask == ((1 << n) - 1)) {
            return 0;
        }
        // cout << "mask = " << mask << endl;
        if(dp[mask] != -1) {
            return dp[mask];
        }
        int ans = n + 1;
        vector<int> allowedCourses;
        for(int i = 0; i < n; i++) {
            if(degree[i] == 0 && (mask & (1 << i)) == 0) {
                allowedCourses.push_back(i);
                // cout << i << " "; 
            }
        }
        // cout << endl;
        if(allowedCourses.size() <= k) {
            int newMask = mask;
            for(int i = 0; i < allowedCourses.size(); i++) {
                newMask = (newMask | (1 << allowedCourses[i]));
                for(int child : G[allowedCourses[i]]) {
                    degree[child]--;
                }
            }
            ans = min(ans, 1 + solve(newMask, degree, n, k));
            for(int i = 0; i < allowedCourses.size(); i++) {
                for(int child : G[allowedCourses[i]]) {
                    degree[child]++;
                }
            }
        } else {
            int sz = allowedCourses.size();
            for(int bit = 0; bit < (1 << sz); bit++) {
                if(__builtin_popcount(bit) == k) {
                    // cout << "bit = " << bit << endl;
                    int newMask = mask;
                    bool invalid = false;
                    for(int i = 0; i < sz; i++) {
                        if((bit & (1 << i)) && (mask & (1 << allowedCourses[i]))) {
                            invalid = true;
                            break;
                        }
                    }
                    if(invalid) {
                        continue;
                    }
                    for(int i = 0; i < sz; i++) {
                        if(bit & (1 << i)) {
                            newMask = (newMask | (1 << allowedCourses[i]));
                            for(int child : G[allowedCourses[i]]) {
                                degree[child]--;
                            }
                        }
                    }
                    ans = min(ans, 1 + solve(newMask, degree, n, k));
                    for(int i = 0; i < sz; i++) {
                        if((bit & (1 << i))) {
                            for(int child : G[allowedCourses[i]]) {
                                degree[child]++;
                            }
                        }
                    }
                }
            }
        }

        return dp[mask] = ans;
    }

    int minNumberOfSemesters(int n, vector<vector<int>>& relations, int k) {
        memset(dp, -1, sizeof(dp));
        vector<int> indegree(n, 0);
        for(auto e : relations) {
            G[e[0] - 1].push_back(e[1] - 1);
            indegree[e[1] - 1]++;
        }
        return solve(0, indegree, n, k);
    }
};
