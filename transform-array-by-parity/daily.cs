class Solution {
public:
    int numberOfSubstrings(const string& s) const {
        int a{}, b{}, c{}, i{}, t{}; 
        for(auto x : s) {
            switch(x) {
                case 'a': a = ++i; t += min(b, c); break;
                case 'b': b = ++i; t += min(a, c); break;
                case 'c': c = ++i; t += min(a, b); break;
            }
        }
        return t;
    }
};
