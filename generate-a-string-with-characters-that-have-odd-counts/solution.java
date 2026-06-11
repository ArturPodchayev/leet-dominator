class Solution {
    public String generateTheString(int n) {
        char[] ans = new char[n];
        if(n%2 == 0){
            for(int i = 0; i < n - 1; i++){
                ans[i] = 'a';
            }
            ans[n-1] = 'b';
        }
        else{
            for(int i = 0; i<n; i++){
                ans[i] = 'a';
            }
        }
        return new String(ans);
    }
}
