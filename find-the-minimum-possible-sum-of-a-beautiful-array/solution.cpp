class Solution {
public:
    long long minimumPossibleSum(int n, int k) {
         unordered_set<int>s;
        long long  i=1,ans=0;
        while(s.size()!=n){
            if(s.find(k-i)==s.end()){
            s.insert(i);
            ans += i;
            }
            i++;
        }
        return ans;
        
    }
};
