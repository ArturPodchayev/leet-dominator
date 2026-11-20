class Solution {
public:
    long long helper(int num, vector<int>b){
        long long ans=0;
        for(int i=0; i<b.size(); i++){
            if(num<b[i]){
                ans+=(b[i]-num);
                b[i]-=num;
            }else if(num>b[i]){
                ans+=b[i];
                b[i]=0;
            }
        }
        return ans;
    }
    
    long long minimumRemoval(vector<int>& beans) {
        long long ans=INT_MAX;
        unordered_set<int>st;
        for(int i=0; i<beans.size(); i++){
            st.insert(beans[i]);
        }
        
        for(auto i:st){
            ans=min(ans, helper(i, beans));
            
        }
        
        return ans;
               
    }
};
