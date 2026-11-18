class Solution {
public:
    int minChanges(string_view s)const {
        int count = 0;
        auto it = s.begin(), end = s.end();
        while(it != end) count += *(it++) != *(it++);
        return count;
        
    }
};
