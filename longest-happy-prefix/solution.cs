public class Solution {
    public string LongestPrefix(string s) {
        int len = s.Length;
        if(len == 1)
            return "";
        
        int[] lps = new int[len];
        int pre = 0, suf = 1;
        while(suf < len){
            if(s[pre] == s[suf])
            {
                lps[suf] = pre+1;
                pre++;
                suf++;
            }
            else{
                if(pre != 0)
                    pre = lps[pre-1];
                else{
                    lps[suf] = 0;
                    suf++;
                }
            }
        }
        return s.Substring(0, lps[len-1]);
    }
}
