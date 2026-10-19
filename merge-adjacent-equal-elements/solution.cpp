class Solution {
public:
    vector<long long> mergeAdjacent(vector<int>& nums) {
        stack<long long> st;

        for(int i=0;i<nums.size();i++){
            st.push(nums[i]);
            while(st.size() >= 2){
                long long first = st.top();
                st.pop();
                long long second = st.top();
                st.pop();
                if(first == second){
                    st.push(first+second);
                }else{
                    st.push(second);
                    st.push(first);
                    break;
                }
            }
        }
        vector<long long> ans;
        while(!st.empty()){
            ans.push_back(st.top());
            st.pop();
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
