class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        int m = mat.size();
        int n = mat[0].size();
        vector<pair<int,int>>v;

        int i = 0;
        while (i<m){
            int count = 0;
            int j = 0;

            while(j<n && mat[i][j]==1){
                count++;
                j++;
            }
            v.push_back({count , i});
            i++;
        }
        sort (v.begin(), v.end());

        vector<int>ans;
        int j = 0;

        while(j<k){
            ans.push_back(v[j].second);
            j++;
        }
        return ans;
        
    }
};
