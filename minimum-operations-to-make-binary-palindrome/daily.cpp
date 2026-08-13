class Solution {
public:
    string s;
    map<int, int> intervals;
    multiset<int> lengths;

    void eraseLength(int len) {
        lengths.erase(lengths.find(len));
    }

    void addInterval(int start, int len) {
        intervals[start] = len;
        lengths.insert(len);
    }

    void initialize() {
        int n = s.size();
        int start = 0;
        int len = 1;

        for (int i = 1; i < n; i++) {
            if (s[i] == s[i - 1]) {
                len++;
            } else {
                addInterval(start, len);
                start = i;
                len = 1;
            }
        }

        addInterval(start, len);
    }

    void mergeAt(int pos) {
        auto current = intervals.find(pos);

        int start = pos;
        int len = current->second;
        char c = s[pos];

        eraseLength(len);

        if (current != intervals.begin()) {
            auto left = prev(current);

            if (s[left->first] == c) {
                start = left->first;
                len += left->second;

                eraseLength(left->second);
                intervals.erase(left);
            }
        }

        auto right = next(current);

        if (right != intervals.end() && s[right->first] == c) {
            len += right->second;

            eraseLength(right->second);
            intervals.erase(right);
        }

        intervals.erase(current);
        addInterval(start, len);
    }

    void update(int pos, char c) {
        if (s[pos] == c) {
            return;
        }

        auto current = prev(intervals.upper_bound(pos));

        int left = current->first;
        int right = left + current->second - 1;

        eraseLength(current->second);
        intervals.erase(current);

        if (left < pos) {
            addInterval(left, pos - left);
        }

        if (pos < right) {
            addInterval(pos + 1, right - pos);
        }

        s[pos] = c;
        addInterval(pos, 1);

        mergeAt(pos);
    }

    vector<int> longestRepeating(
        string s,
        string queryCharacters,
        vector<int>& queryIndices
    ) {
        this->s = s;
        initialize();

        vector<int> answer;

        for (int i = 0; i < queryIndices.size(); i++) {
            update(queryIndices[i], queryCharacters[i]);
            answer.push_back(*lengths.rbegin());
        }

        return answer;
    }
};
