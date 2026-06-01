class Solution {
 public:
  int n;
  int dp[200100][3];
  string s;
  int rec(int i, int mode){
    // min no of operations required to remove all 1's from [i .. n - 1] with the current_mode 

    // pruning

    // base case
    if(i >= n){
        return 0;
    }
    // cache check
    if(dp[i][mode] != -1){
        return dp[i][mode];
    }
    // compute
    int ans = 1e9;
    for(int l = mode; l < 3; l++){
        if(l == 0){
            if(s[i] == '0' or s[i] == '1'){
              ans = min(ans, 1 + rec(i + 1, l));
            }
        } else if(l == 1){
            if(s[i] == '0'){
               ans = min(ans, rec(i + 1, l));
            } else {
                ans = min(ans, 2 + rec(i + 1, l));
            }
        } else {
            if(s[i] == '0' or s[i] == '1'){
                ans = min(ans, 1 + rec(i + 1, l));
            }
        }
    }

    // save ans and return
    return dp[i][mode] = ans;
  }

  int minimumTime(const string x) {
    s = x;
    n = s.size();
    memset(dp, -1, sizeof(dp));
    return rec(0, 0);
  }
};
