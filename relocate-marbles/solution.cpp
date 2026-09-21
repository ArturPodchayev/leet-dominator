class Solution {
public:
    vector<int> relocateMarbles(vector<int>& nums, vector<int>& moveFrom, vector<int>& moveTo) {
        set <int> st(nums.begin(),nums.end());
        vector<int> vec;
        
        for(int i=0; i<moveFrom.size(); i++){
            st.erase(moveFrom[i]);
            st.insert(moveTo[i]);
        }
        
        return vector<int>(st.begin(),st.end());
    }
};
