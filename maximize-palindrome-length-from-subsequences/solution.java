class Solution {
    public int longestPalindrome(String word1, String word2) {
        // i from s, j from t
        // f[i][j] = max(f[i+1][j], f[i][j-1]) s1[i] != s2[j]
        // f[i][j] = f[i+1][j-1] s1[i] == s2[j]\
        char[] s = (word1 + word2).toCharArray();
        int n = s.length;
        int[][] f = new int[n][n];
        int ans = 0;
        for(int i = n-1; i >= 0; --i){
            f[i][i] = 1;
            for(int j = i+1; j < n; ++j){
                if(s[i] == s[j]){
                    f[i][j] = f[i+1][j-1] + 2;
                    if(i < word1.length() && j >= word1.length()){
                        ans = Math.max(f[i][j], ans);
                    }
                }else{
                    f[i][j] = Math.max(f[i+1][j], f[i][j-1]);
                }
            }
        }
        return ans;
    }
}
