class Solution {
public:
    bool iSVowol(char c)
    {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
    int vowelStrings(vector<string>& words, int left, int right) {
        int cnt = 0;
        for(int i = left; i <= right; i++)
        {
            if (iSVowol(words[i][0]) && iSVowol(words[i][words[i].size() - 1]))
                cnt++;
        }
        return cnt;
    }
};
