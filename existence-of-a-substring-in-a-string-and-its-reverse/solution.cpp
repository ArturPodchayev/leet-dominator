class Solution {
public:
    bool isSubstringPresent(string s) {
        for(size_t i = 1; i < s.length(); ++i)
            if(s[i] == s[i-1] || s[i-1] == s[i+1])
                return true;
        return false;
    }
};
