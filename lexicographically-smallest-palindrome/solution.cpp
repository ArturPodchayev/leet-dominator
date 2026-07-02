#include <string>
#include <algorithm>

class Solution {
public:
    string makeSmallestPalindrome(string str) {
        int start = 0;
        int end = str.length() - 1;
        char ch[str.length()];
        copy(str.begin(), str.end(), ch);
        
        while (start <= end) {
            if (ch[start] == ch[end]) {
                start++;
                end--;
            } else {
                int inder = ch[start] - '0';
                int jeet = ch[end] - '0';
                if (inder > jeet) {
                    ch[start] = ch[end];
                } else {
                    ch[end] = ch[start];
                }
                
                start++;
                end--;
            }
        }
        
        return string(ch, str.length());
    }
};
