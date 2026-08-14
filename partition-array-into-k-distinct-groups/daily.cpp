class Solution {
public:
    int maximumLengthSubstring(string s) {
        int l=0,r=0,len=0;
        unordered_map<char,int>mp;

        while(true){
            // EXPAND
            if(mp[s[r]] < 2){
                if(r < s.size()){
                    mp[s[r]]++;
                    r++;
                }else break;
            }
            else{
            // SHRINK
                if(l < s.size()-1){
                    if(mp[s[l]] == 1) mp.erase(s[l]);
                    else mp[s[l]]--;
                    l++;
                }else break;
            }
            // VALID CONDITION
            if(mp[s[r]] <= 2) len = max(len, r-l);
        }
        return len;
    }
};
