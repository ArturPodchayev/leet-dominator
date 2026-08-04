class Solution {
public:
    static vector<int> findMissingElements(vector<int>& nums) {
        bitset<101> prsnt = 0;
        int start = 101, end = 0;
        for(int x: nums){
            prsnt[x]=1;
            start = min(x, start);
            end = max(x, end);
        }
        vector<int> ans;
        for(int i = start+1;i<end;i++)
            if (!prsnt[i]) ans.push_back(i);
        return ans;
    }
};
