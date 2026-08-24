class Solution {
public:
    bool isPalindrome(string s){
        int n = s.length();
        int i = 0, j = n-1;
        while(i < j){
            if(s[i++] != s[j--]) return false;
        }
        return true;
    }
    int longestPalindrome(string s, string t) {
        int n = s.length(), m = t.length();
        int result = 1;
        for(int i = 0; i < n; i++){
            string s1 = "";
            for(int j = i; j < n; j++){
                s1 += s[j];
                if(isPalindrome(s1)) result = max(result, j-i+1);
                for(int k = 0; k < m; k++){
                    string t1 = "";
                    for(int l = k; l < m; l++){
                        t1 += t[l];
                        if(isPalindrome(t1)) result = max(result, l-k+1);
                        if(isPalindrome(s1 + t1)){
                            int len = s1.length() + t1.length();
                            result = max(result, len);
                        }
                    }
                }
            }
        }
        return result;
    }
};
