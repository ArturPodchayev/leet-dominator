class Solution {
public:
    int minAddToMakeValid(string s) {
        stack<int> open;
        stack<int> close;
        int count = 0;

        for (int i = 0; i < s.size(); i++) {
            if (s[i] == '(') {
                open.push(i);
            } else {
                if (!open.empty()) {
                    open.pop();
                } else {
                    close.push(i);
                }
            }
        }

        while (!open.empty() && !close.empty()) {
            if (open.top() < close.top()) {
                open.pop();
                close.pop();
            } else {
                count++;
                close.pop();
            }
        }

        while (!open.empty()) {
            count++;
            open.pop();
        }

        while (!close.empty()) {
            count++;
            close.pop();
        }

        return count;
    }
};
