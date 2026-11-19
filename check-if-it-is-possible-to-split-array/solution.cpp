class Solution {
public:
    bool canSplitArray(vector<int>& v, int m) {
        int n=v.size();
        if(n==1 || n==2 ) return 1;
            for(int i=0;i<n-1;i++){
                if(v[i]+v[i+1]>=m) return 1;
            }
            return 0;
        
    }
};
