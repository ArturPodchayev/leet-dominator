class Solution {
public:
    int longestPalindrome(string s, string t) {
        int n=s.size(),m=t.size();
        int ans=0;

        vector<vector<bool>>dpS(n+1,vector<bool>(n+1,false));
        vector<int>longestPalindromeStartAt(n+1,0);
        
        //checking and building from last of s
        for(int i=n-1;i>=0;i--){
           for(int j=i;j<n;j++){
              if(s[i]==s[j] && (j-i<=1||dpS[i+1][j-1])){
                 dpS[i][j]=true;
                 longestPalindromeStartAt[i]=max(longestPalindromeStartAt[i],j-i+1);
                 ans=max(ans,longestPalindromeStartAt[i]);
              }
           }
        }
        
        vector<vector<bool>>dpT(m+1,vector<bool>(m+1,false));
        vector<int>longestPalindromeEndingAt(m+1,0);

        //checking and building from last of t
        for(int i=m-1;i>=0;i--){
           for(int j=i;j<m;j++){
              if(t[i]==t[j] && (j-i<=1||dpT[i+1][j-1])){
                 dpT[i][j]=true;
                 longestPalindromeEndingAt[j]=max(longestPalindromeEndingAt[j],j-i+1);
                 ans=max(ans,longestPalindromeEndingAt[j]);
              }
           }
        }

        //now checking all possible palindrome options from s and t
        //checking s from front and t from back
        vector<vector<int>>dp(n+1,vector<int>(m+1,0));
        for(int i=0;i<n;i++){
           for(int j=m-1;j>=0;j--){
              if(s[i]==t[j]){
                 dp[i][j]=1;
                 if(i>0 && j<m-1)dp[i][j]+=dp[i-1][j+1];
              }
              if(dp[i][j]){
                int extra=0;
                if(i+1<n)extra=max(extra,longestPalindromeStartAt[i+1]);
                if(j-1>=0)extra=max(extra,longestPalindromeEndingAt[j-1]);
                ans=max(ans,2*dp[i][j]+extra);
              }
           }
        }
        return ans;
    }
};
