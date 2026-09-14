class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        int n = arr.size(),c=0;
        string m = "";
        unordered_map<string,int> mp;

        for(auto i : arr){
            mp[i]++;
        }
        for(auto &i : arr){
            if(mp[i] == 1){
                c++;
                if(c == k) return i;
            }
        }

        return m;
    }
};
