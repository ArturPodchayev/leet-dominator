class Solution {
public:
    void myreverse(string &s) {
        int left = 0;
        int right = s.size() - 1;

        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }

    string smallestPalindrome(string s) {

        vector<int> freq(26, 0);

        for (char ch : s) {
            freq[ch - 'a']++;
        }

        string left = "";
        string mid = "";

        for (int i = 0; i < 26; i++) {

            left += string(freq[i] / 2, 'a' + i);

            if (freq[i] % 2 == 1) {
                mid = char('a' + i);
            }
        }

        string right = left;
        myreverse(right);

        return left + mid + right;
    }
};
