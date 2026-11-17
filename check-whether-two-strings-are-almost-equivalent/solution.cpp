class Solution {
public:
    bool checkAlmostEquivalent(string word1, string word2) {
        vector<int> v1(26), v2(26);
        for(auto x: word1) v1[x-'a']++;
        for(auto x: word2) v2[x-'a']++;
        for (int i = 0; i < 26; i++) {
            if (abs(v1[i] - v2[i]) > 3) return false;
        }
        return true;
    }
};
