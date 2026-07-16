class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        int m = target.size();
        int cnt = 1;
        int i = 0;
        vector<string> ans;

        while (cnt <= n && i < m) {
            if (cnt == target[i]) {
                ans.push_back("Push");
                i++;
            } else {
                ans.push_back("Push");
                ans.push_back("Pop");
            }
            cnt++;
        }
        return ans;
    }
};
