class Solution {
public:
    int evaluate(string expression) {
        unordered_map<string, int> hashmap;
        return parse(expression, hashmap);
    }
    int parse(string str, unordered_map<string, int> hashmap) {
        if(str.size() == 0) return 0;
        if(hashmap.count(str)) {
            auto res = hashmap[str];
            return res;
        }
        auto currop = str.substr(1,3);
        string last_var;
        if(currop == "let") {
            int l = 5, r = 5;
            bool var_or_val = 0; // 1 var, 0 val or expression
            while(true) {
                if(str[r] == ' ') {
                    auto curr = str.substr(l, r-l);
                    if(not var_or_val) {
                        last_var = curr;
                    }
                    else {
                        if(isdigit(curr[0]) or curr[0] == '-')
                            hashmap[last_var] = stoi(curr);
                        else
                            hashmap[last_var] = hashmap[curr];
                    }
                    r++;
                    l = r;
                    var_or_val = not var_or_val;
                    continue;
                }
                if(str[r] == ')') {
                    auto curr = str.substr(l, r-l);
                    if(isdigit(str[l]) or str[l] == '-') {
                        return stoi(curr);
                    }
                    return hashmap[curr];
                }
                if(str[r] == '(') {
                    int nextidx = matchingparanthesis(str, r)+1;
                    int expval = parse(str.substr(r, nextidx-r), hashmap);
                    if(str[nextidx] == ' ') {
                        hashmap[last_var] = expval;
                        r = nextidx+1;
                        l = r;
                        var_or_val = 0;
                        continue;
                    }
                    return expval;
                }
                r++;
            }
        }
        else if(currop == "mul") {
            auto res = sum_mult(str, 6, 6, hashmap);
            return res.first * res.second;
        }
        else { // add
            auto res = sum_mult(str, 5, 5, hashmap);
            return res.first + res.second;
        }
        return 0;
    }

    pair<int, int> sum_mult(string str, int l, int r, unordered_map<string, int> &hashmap) {
            int first, second = 0;
            if(str[l] == '(') {
                int nextidx = matchingparanthesis(str, l)+1;
                first = parse(str.substr(l, nextidx-l), hashmap);
                r = nextidx+1;
                l = r;
            }
            else {
                while(true) {
                    if(str[r] == ' ') {
                        auto curr = str.substr(l, r-l);
                        if(hashmap.count(curr)) {
                            first = hashmap[curr];
                        }
                        else {
                            first = stoi(curr);
                        }
                        break;
                    }
                    r++;
                }
                r++;
                l = r;
            }

            if(str[l] == '(') {
                int nextidx = matchingparanthesis(str, l)+1;
                second = parse(str.substr(r, nextidx-l), hashmap);
            }
            else {
                while(true) {
                    if(str[r] == ')') {
                        auto curr = str.substr(l, r-l);
                        if(hashmap.count(curr)) {
                            second = hashmap[curr];
                        }
                        else {
                            second = stoi(curr);
                        }
                        break;
                    }
                    r++;
                }
            }
            return {first, second};         
    }

    int matchingparanthesis(string str, int curr) {
        int cnt = 1;
        curr++;
        while(cnt > 0) {
            if(str[curr] == ')')
                cnt--;
            if(str[curr] == '(')
                cnt++;
            curr++;
        }
        return --curr;
    }
};
