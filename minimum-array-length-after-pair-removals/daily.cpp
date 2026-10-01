class Solution {
public:
    bool isValid(string s) {
        stack<char> temp;

        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                temp.push(c);
            } else {
                if (temp.empty()) return false;

                char top = temp.top();
                temp.pop();

                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }

        return temp.empty();
    }
};
