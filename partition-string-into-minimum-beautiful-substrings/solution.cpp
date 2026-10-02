class Solution {
public:
    int t[16][16];
    bool isPower5(string s) {
        if (s[0] == '0') return false;
        long long num = 0;
        for (char c : s) {
            num = num * 2 + (c - '0'); 
        }
        if (num > 0) {
            long long power = 1;
            while (power < num) power *= 5;
            return power == num;
        }
        return false;
    }
    int solve(int i, int j, string s){
        if(i == j) return 1;
        if(t[i][j] != -1)return t[i][j];
        if(isPower5(s.substr(i, j-i+1)))return 1;
        
        int ans = INT_MAX;
        for(int k = i; k < j; k++){
            if(s[k+1] != '0'){
                int left = solve(i, k, s);
                int right = solve(k+1, j, s);

                if(left != INT_MAX && right != INT_MAX)ans = min(left+right, ans);
            }
        }

        return t[i][j] = ans;
    }
    int minimumBeautifulSubstrings(string s) {
        memset(t, -1, sizeof(t));
        if(s[0] == '0' )return -1;
        int ans = solve(0, s.length()-1, s);
        return ans == INT_MAX ? -1 : ans;
    }
};
