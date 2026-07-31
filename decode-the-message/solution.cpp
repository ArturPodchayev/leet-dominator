class Solution {
public:
    string decodeMessage(string k, string m) {
      map<char,char>mp;
        char temp  = 'a';
        for(int i = 0; i < k.length(); i++) {
            if(k[i] != ' ' && mp.find(k[i]) == mp.end()) {
                mp[k[i]] = temp;
                temp++;
            }
            
        }
        
        string res = "";
        
        for(int i = 0; i < m.length(); i++) {
            if(m[i] != ' ') {
                res+= mp[m[i]];
            }
            else {
                res+= " ";
            }
        }
        
        return res;
    }
};
